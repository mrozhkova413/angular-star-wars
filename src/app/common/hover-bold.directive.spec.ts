import { TestBed } from '@angular/core/testing';
import { HoverBoldDirective } from './hover-bold.directive';
import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {}
let elRef: ElementRef;

describe('HoverBoldDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
    elRef = TestBed.get(ElementRef);
  });

  it('should create an instance', () => {
    const directive = new HoverBoldDirective(elRef);
    expect(directive).toBeTruthy();
  });

  // it('should be bold on hover', () => {
  //   expect(elRef.nativeElement.style.fontWeight === '400')
  //   const directive = new HoverBoldDirective(elRef);
  //   expect(directive).toBeTruthy();

  //   elRef.nativeElement.dispatchEvent(new MouseEvent('mouseenter', {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true
  //   }));
  //   expect(elRef.nativeElement.style.fontWeight === '550')

  //   elRef.nativeElement.dispatchEvent(new MouseEvent('mouseleave', {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true
  //   }));
  //   expect(elRef.nativeElement.style.fontWeight === '400')
  // });
});
