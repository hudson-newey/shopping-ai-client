import { Component, Input } from "@angular/core";
import { ChatMessage } from "../chat-message/chat-message.component";
import { environment } from "src/app/environment";

@Component({
  selector: "ais-share-menu[chatMessage]",
  templateUrl: "./share-menu.component.html",
})
export class ShareMenuComponent {
  public constructor() {}

  @Input() public chatMessage!: string;

  protected get shareableLink(): string {
    return `${environment.url}/?q=${this.sanitizeChatMessage(this.chatMessage)}`;
  }

  private sanitizeChatMessage(message: string): string {
    return encodeURIComponent(message);
  }
}
