import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public constructor() {}

  public title = "client";
  public faCoffee = faCoffee;
}
