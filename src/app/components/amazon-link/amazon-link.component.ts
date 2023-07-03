import { Component, Input } from "@angular/core";

@Component({
  selector: "ais-amazon-link",
  template: `<a [href]="createAmazonUrl(productName)" class="text-blue-400" target="_blank">{{productName}}</a>`,
})
export class AmazonLinkComponent {
  public constructor() {}

  @Input() public productName: string = "test";

  protected createAmazonUrl(productName: string): string {
    return `https://www.amazon.com/s?k=${productName}&tag=shoppingas09c-20&linkCode=ur2&linkId=13298757f791956381bc4bf80afbb588&camp=1789&creative=9325`;
  }
}
