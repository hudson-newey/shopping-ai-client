import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ChatMessage {
  name: string;
  message: string;
  response?: string;
}

export interface ApiChatMessage {
  role: string;
  content: string;
}

@Component({
  selector: 'ais-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
  public constructor(private sanitizer: DomSanitizer) {}

  @Input() public name: string = 'Anonymous';
  @Input() public message: string = '';
  @Input() public thinking: boolean = true;
  @Input() public response?: string;

  public get formattedResponse(): SafeHtml | undefined {
    if (!this.response) {
      return this.response;
    }

    // add amazon links and referral parameters
    let result = this.response;
    const foundAmazonItems = result.match(/[0-9]+\..+\:/gi);

    foundAmazonItems?.forEach((item: string) => {
      const resultText = item.replace(":", "").replace(/[0-9]+\. /, "");

      // add referral parameters and amazon search url
      result = result.replace(resultText, `<a href="${this.createAmazonUrl(resultText)}" class="text-blue-400">${resultText}</a>`);
    });

    // replace new line characters with <br>
    return this.sanitizer.bypassSecurityTrustHtml(
      result.replace(/\n/g, '<br/>')
      );
    }

    private createAmazonUrl(productName: string): string {
      return `https://www.amazon.com/s?k=${productName}&tag=shoppingas09c-20&linkCode=ur2&linkId=13298757f791956381bc4bf80afbb588&camp=1789&creative=9325`;
    }
}
