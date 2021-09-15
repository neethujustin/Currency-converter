import { Component, OnInit } from '@angular/core';
import {Rates} from '../rate';
import { ConvertPipe } from '../convert.pipe';

@Component({
  selector: 'app-currency-global',
  templateUrl: './currency-global.component.html',
  styleUrls: ['./currency-global.component.css']
})
export class CurrencyGlobalComponent  {
  title = 'currency-converter';
  currentVal: number;
  buttons: Array<string>;
  unit: string;
  value = 500;
  currencyVal: Object;
  constructor(private converterpipe: ConvertPipe) {
   this.currentVal = 1;
   this.unit = 'USD';
   this.buttons = Object.keys(new Rates().rates);
   this.currencyVal = {};
  }

  convert(val, unit) {
     this.currencyVal = this.converterpipe.transform(val, unit);
  }

  getKeys() {
    return Object.keys(this.currencyVal);
  }
}
