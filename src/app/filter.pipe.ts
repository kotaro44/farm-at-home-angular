import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(objects: object[], name: string): any {
    return objects.filter((listing: any) => listing.name.match(name));
  }
}
