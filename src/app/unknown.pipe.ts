import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unknown'
})
export class UnknownPipe implements PipeTransform {
  transform(value: string, args?: any): string | null {
    if (value === 'n/a')
      return 'not applicable';
    return value;
  }
}
