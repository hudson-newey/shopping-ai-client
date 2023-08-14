import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { environment } from "src/app/environment";

@Component({
  selector: "ais-country-picker",
  templateUrl: "./country-picker.component.html",
})
export class CountryPickerComponent implements OnInit {
  public constructor(private route: ActivatedRoute, private router: Router) {}

  protected countryCode: string = ".com";

  private userCountryDictionary: Record<string, string> = {
    US: ".com",
    AU: ".com.au",
    BR: ".com.br",
    CA: ".ca",
    CN: ".cn",
    FR: ".fr",
    DE: ".de",
    IN: ".in",
    IT: ".it",
    MX: ".com.mx",
    NL: ".nl",
    SG: ".sg",
    ES: ".es",
    TR: ".com.tr",
    AE: ".ae",
    GB: ".co.uk",
    JP: ".co.jp",
  };

  public ngOnInit(): void {
    const userAgentLanguage = this.userCountry();

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.countryCode =
        queryParams["country"] ??
        this.userCountryDictionary[userAgentLanguage] ??
        ".com";

        if (queryParams["country"] !== this.userCountryDictionary[userAgentLanguage]) {
          this.updateCountry();
        }
    });
  }

  protected updateCountry(): void {
    const currentQueryParams = this.route.snapshot.queryParams;

    const queryParams: Params = {
      country: this.countryCode,
      q: currentQueryParams["q"],
    };
    console.log(queryParams);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  }

  private userCountry(): string {
    if (environment.private) {
      return "US";
    }

    const userAgentLanguage = window.navigator.language;
    return userAgentLanguage.split("-")[1];
  }
}
