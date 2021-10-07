import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customJSON',
  pure: false
})
export class CustomJSONPipe implements PipeTransform {

  transform(value: object, ...args: string[]): string {
    console.log(args);
    return JSON.stringify(value);
  }

}
