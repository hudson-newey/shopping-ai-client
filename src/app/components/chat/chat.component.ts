import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../chat-message/chat-message.component';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'ais-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  public constructor(private api: ApiService) {}

  public userInput: string = '';
  public user: User = new User('Anonymous');

  public messages: ChatMessage[] = [];

  public sendMessage(): void {
    const message: ChatMessage = {
      name: this.user.username,
      message: this.userInput,
    };

    this.messages.push(message);

    this.api.get(this.userInput).then((response) => {
      message.response = response.content;
    });
    this.userInput = '';
  }
}
