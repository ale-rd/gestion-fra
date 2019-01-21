import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(miEnum: Object): any {
    const entries = Object.entries(miEnum);
    return entries.slice(entries.length / 2);
  }

}
