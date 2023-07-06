import { AfterViewInit, Component, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

export interface ChatMessage {
  name: string;
  message: string;
  response?: string;
  error?: boolean;
}

export interface ApiChatMessage {
  role: string;
  content: string;
}

@Component({
  selector: "ais-chat-message",
  templateUrl: "./chat-message.component.html",
  styleUrls: ["./chat-message.component.scss"],
})
export class ChatMessageComponent {
  public constructor(private sanitizer: DomSanitizer) {}

  @Input() public message: ChatMessage = {
    name: "Anonymous",
    message: "Thinking...",
  };

  protected relatedSearches: string[] = [];

  protected get name(): string {
    return this.message.name ?? "Anonymous";
  }

  protected get response(): string {
    return this.message.response ?? "Thinking...";
  }

  protected get thinking(): boolean {
    return !!this.message.response;
  }

  protected get formattedResponse(): SafeHtml | undefined {
    if (!this.response) {
      return this.response;
    }

    // add amazon links and referral parameters
    let result = this.response;
    const foundAmazonItems = result.match(/[0-9]+\..+\:/gi);
    const foundAmazonSearchRequests: RegExpMatchArray | null =
      result.match(/".+"/gi);

    foundAmazonSearchRequests?.forEach((searchRequest: string) => {
      result = result.replace(
        searchRequest,
        `<a href="${this.createAmazonSearchUrl(
          searchRequest
        )}" class="text-blue-300" target="_blank">${searchRequest}</a>`
      );

      this.relatedSearches.push(searchRequest.replace(/"/g, ""));
    });

    foundAmazonItems?.forEach((item: string) => {
      const resultText = item.replace(":", "").replace(/[0-9]+\. /, "");

      this.relatedSearches.push(resultText);

      // add referral parameters and amazon search url
      result = result.replace(
        resultText,
        `<a href="${this.createAmazonUrl(
          resultText
        )}" class="text-blue-300" target="_blank">${resultText}</a>`
      );
    });

    // replace new line characters with <br>
    return this.sanitizer.bypassSecurityTrustHtml(
      result.replace(/\n/g, "<br/>")
    );
  }

  protected createAmazonSearchUrl(searchTerm: string): string {
    searchTerm = searchTerm.replaceAll('"', "");
    searchTerm = searchTerm.replaceAll(" ", "%20");
    return `https://www.amazon.com/s?k=${searchTerm}&tag=shoppingas09c-20&linkCode=ur2&linkId=13298757f791956381bc4bf80afbb588&camp=1789&creative=9325`;
  }

  protected createAmazonUrl(productName: string): string {
    return this.createAmazonSearchUrl(productName);
  }
}
