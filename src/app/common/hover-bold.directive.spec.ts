import { TestBed } from '@angular/core/testing';
import { HoverBoldDirective } from './hover-bold.directive';
import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {}
let elRef: ElementRef;

describe('HoverBoldDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        // { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
    elRef = TestBed.get(ElementRef);
  });

  it('should create an instance', () => {
    const directive = new HoverBoldDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
