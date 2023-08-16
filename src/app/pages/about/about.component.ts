import { Component } from "@angular/core";
import { environment } from "src/app/environment";

@Component({
  selector: "ais-about-page",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutPageComponent {
  public constructor() { }

  protected get websiteUrl() {
    return environment.url;
  }
}
