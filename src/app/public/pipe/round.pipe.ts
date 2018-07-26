import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(number, precision) {
    return Math.round(+(number + 'e' + precision)) / Math.pow(10, precision);
  }

}
