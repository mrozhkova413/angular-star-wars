import { NotApplicablePipe } from "./not-applicable.pipe";

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <h2 data-testid="header">{{ field | not_applicable }}</h2>
  `
})
export class AboutComponent {
  field: string = 'n/a'
 }

describe('NotApplicablePipe', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let header: HTMLHeadingElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AboutComponent, NotApplicablePipe ]
    })
    .createComponent(AboutComponent);
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css(`[data-testid="header"]`)).nativeElement;
  });

  it('create an instance', () => {
    const pipe = new NotApplicablePipe();
    expect(pipe).toBeTruthy();
  });

  it('should change text to not applicable', () => {
    expect(header.innerText === 'not applicable').toBeTrue();
  });
});
