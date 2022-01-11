import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverBold]'
})
export class HoverBoldDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bold('570');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bold('');
  }

  private bold(weight: string) {
    this.el.nativeElement.style.fontWeight = weight;
  }
}
