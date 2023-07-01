import { Component, Input } from "@angular/core";

export interface ChatMessage {
  name: string;
  message: string;
  response?: string;
};

@Component({
  selector: "ais-chat-message",
  templateUrl: "./chat-message.component.html"
})
export class ChatMessageComponent {
  public constructor() { }

  @Input() public name: string = "Anonymous";
  @Input() public message: string = "";
  @Input() public response?: string = "Thinking...";
}
