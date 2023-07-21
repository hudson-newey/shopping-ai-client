import { Component, Input } from "@angular/core";
import { ChatMessage } from "../chat-message/chat-message.component";
import { environment } from "src/app/environment";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "ais-share-menu[chatMessage]",
  templateUrl: "./share-menu.component.html",
})
export class ShareMenuComponent {
  public constructor(
    private deviceService: DeviceDetectorService,
  ) {}

  @Input() public chatMessage!: string;

  protected get shareableLink(): string {
    return `${environment.url}/?q=${this.sanitizeChatMessage(this.chatMessage)}`;
  }

  protected systemShareTray(): void {
    if (navigator.share) {
      navigator.share({
        title: "Ask It Simple",
        text: this.chatMessage,
        url: this.shareableLink,
      });
    }
  }

  protected isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  private sanitizeChatMessage(message: string): string {
    return encodeURIComponent(message);
  }
}
