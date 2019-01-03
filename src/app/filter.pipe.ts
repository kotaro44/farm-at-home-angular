import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(objects: object[], text: string): any {
    return objects.filter((object: any) => {
      return object.name.match(text);
    });
  }
}
