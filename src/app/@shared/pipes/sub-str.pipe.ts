import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subStr',
})
export class SubStrPipe implements PipeTransform {

  transform(value: string | string[], length: number): string {
    if(Array.isArray(value)){
      value = value.join(', ');
    }
    return !!value ? `${value.substr(0, length)}${value.length > length ? '...' : ''}` : '';
  }

}
