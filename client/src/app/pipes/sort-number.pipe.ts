import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(array: any[], args?: string): any[] {
    if (!array) {
      return null;
    } else {
      array.sort((a: any, b: any) => {
        if (Number(a[ args ]) < Number(b[ args ])) {
          return -1;
        } else if (Number(a[ args ]) > Number(b[ args ])) {
          return 1;
        } else {
          return 0;
        }
      });

      return array;
    }
  }

}
