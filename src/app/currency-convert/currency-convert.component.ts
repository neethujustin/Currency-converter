import {
  Component,
  OnInit
} from '@angular/core';
import {
  Rates
} from '../rate';
import {
  ConvertPipe
} from '../convert.pipe';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent {

  title = 'currency-converter';
  currentVal: number;
  buttons: Array < string > ;
  unit: string;
  value = 500;
  currencyVal: Object;
  selectedCountryVal: Object;
  currentCountry;
  selectedCountry;
  constructor(private converterpipe: ConvertPipe) {
      this.currentVal = 1;
      this.unit = 'USD';
      this.buttons = Object.keys(new Rates().rates);
      this.currencyVal = {};
      this.selectedCountryVal = {};
  }
  currentCountryChange(val, currentCountry, unit) {
      this.convert(val, currentCountry, unit)
  }
  convert(val, currentCountry, unit) {
      // console.log(unit)
      this.selectedCountryVal = {};

      console.log(this.currentCountry)
      this.currencyVal = this.converterpipe.transform(val, currentCountry);
      for (let key in this.currencyVal) {
          if (this.currencyVal.hasOwnProperty(key)) {
              if (key == unit) {
                  this.selectedCountryVal[unit] = this.currencyVal[unit]
              }
          }
      }
  }
  getKeys() {
      return Object.keys(this.selectedCountryVal);
  }
}