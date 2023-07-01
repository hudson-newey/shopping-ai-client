import { Component } from '@angular/core';
import { environment } from 'src/app/environment';

@Component({
  selector: 'ais-examples',
  templateUrl: './examples.component.html'
})
export class ExamplesComponent {
  public constructor() { }

  protected brandName = environment.brandName;
}
