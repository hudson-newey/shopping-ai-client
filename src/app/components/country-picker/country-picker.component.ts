import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "ais-country-picker",
  templateUrl: "./country-picker.component.html",
})
export class CountryPickerComponent implements OnInit {
  public constructor(private route: ActivatedRoute, private router: Router) {}

  protected countryCode: string = ".com";

  public ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.countryCode = queryParams["country"] ?? ".com";
    });
  }

  protected updateCountry(): void {
    const currentQueryParams = this.route.snapshot.queryParams;

    const queryParams: Params = {
      country: this.countryCode,
      q: currentQueryParams["q"]
    };
    console.log(queryParams);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  }
}
