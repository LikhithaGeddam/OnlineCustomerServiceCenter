import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any, field: string): any[] {
    array.sort(
      (obj1:any,obj2:any)=>{
        if(obj1[field] < obj2[field])
          return -1;
          if(obj1[field] < obj2[field])
          return 1;
          return 0;
      }
    );
    return array;
  }

}
