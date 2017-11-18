import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(array: any[], args?: string): any[] {
    if (!array) {
      return null;
    } else {
      array.sort((a: any, b: any) => {
        if (new Date(a[ args ]).getTime() < new Date(b[ args ]).getTime()) {
          return -1;
        } else if (new Date(a[ args ]).getTime() > new Date(b[ args ]).getTime()) {
          return 1;
        } else {
          return 0;
        }
      });

      return array;
    }
  }

}
