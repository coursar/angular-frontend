import {Pipe, PipeTransform} from '@angular/core';
import {PlaceEnum} from "../enums/place-enum";

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, symbol: string, symbolPlace: PlaceEnum): string {
    const left = symbol && symbolPlace === PlaceEnum.LEFT ? symbol : '';
    const right = symbol && symbolPlace === PlaceEnum.RIGHT ? symbol : '';
    return `${left}${value}${right}`;
  }

}
