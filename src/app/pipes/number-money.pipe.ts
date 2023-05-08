import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberMoney',
  pure: true
})
export class NumberMoneyPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return Number(value.toFixed(2));
        
    }

}