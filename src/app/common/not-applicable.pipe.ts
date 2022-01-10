import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'not_applicable'
})
export class NotApplicablePipe implements PipeTransform {
  transform(value: string | null, args?: any): string | null {
    if (value === 'n/a')
      return 'not applicable';
    return value;
  }
}
