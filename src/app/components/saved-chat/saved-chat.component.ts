import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/models/Chat';

@Component({
  selector: 'ais-saved-chat[chat]',
  templateUrl: './saved-chat.component.html'
})

export class SavedChatComponent {
  public constructor() { }

  @Input() public chat!: Chat;

  public get initialPrompt(): string {
    return this.chat.prompts[0];
  }
}
