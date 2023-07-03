import { Component, OnInit } from "@angular/core";
import {
  ApiChatMessage,
  ChatMessage,
} from "../chat-message/chat-message.component";
import { User } from "src/app/models/User";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute, Params } from "@angular/router";
import { bannedWords, bannedWordsResponse } from "./bannedWords";

@Component({
  selector: "ais-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  public constructor(private api: ApiService, private route: ActivatedRoute) {}

  public userInput: string = "";
  public user: User = new User("Anonymous");

  public messages: ChatMessage[] = [];

  public ngOnInit(): void {
    const queryParameter: string = "q";

    this.route.queryParams.subscribe((params: Params) => {
      if (params[queryParameter]) {
        this.userInput = params[queryParameter];
        this.sendMessage();
      }
    });
  }

  public sendMessage(): void {
    const query = this.userInput;
    this.userInput = "";

    if (query.length === 0) {
      console.log("bailing out");
      return;
    }

    const message: ChatMessage = {
      name: this.user.username,
      message: query,
    };

    this.messages.push(message);

    if (this.isBannedQuery(message.message)) {
      message.response = bannedWordsResponse;
      return;
    }

    let apiMessages: ApiChatMessage[] = [];
    this.messages.forEach((message: ChatMessage) => {
      apiMessages.push(...this.convertClientMessageToApiMessages(message));
    });

    this.api.requestResponse(query, apiMessages).then((response) => {
      message.response = response.content;
    });
  }

  private isBannedQuery(query: string): boolean {
    for (let i = 0; i < bannedWords.length; i++) {
      if (query.includes(bannedWords[i])) {
        return true;
      }
    }

    return false;
  }

  private convertClientMessageToApiMessages(
    message: ChatMessage
  ): ApiChatMessage[] {
    let messages: ApiChatMessage[] = [
      {
        role: "user",
        content: message.message,
      },
    ];

    if (message.response) {
      messages.push({
        role: "assistant",
        content: message.response,
      });
    }

    return messages;
  }
}
