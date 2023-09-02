import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any[]) {

    if (!value) {
      return value
    }

    return value.length
  }

}
