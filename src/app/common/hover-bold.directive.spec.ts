import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverBoldDirective } from './hover-bold.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <h2 appHoverBold data-testid="header">About</h2>
  `
})
export class AboutComponent { }

describe('HoverBoldDirective', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let header: HTMLHeadingElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AboutComponent, HoverBoldDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .createComponent(AboutComponent);
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css(`[data-testid="header"]`)).nativeElement;
  });

  it('should be bold on hover', () => {
    expect(header.style.fontWeight === '').toBeTrue();

    header.dispatchEvent(new MouseEvent('mouseenter', {
          view: window,
          bubbles: true,
          cancelable: true
        }));
    expect(header.style.fontWeight === '570').toBeTrue();

    header.dispatchEvent(new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(header.style.fontWeight === '').toBeTrue();
  });
});
