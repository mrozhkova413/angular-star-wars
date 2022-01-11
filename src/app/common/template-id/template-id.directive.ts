import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[template-id]'
})
export class TemplateIdDirective {

    constructor(public readonly template: TemplateRef<any>) { }

    @Input('template-id') templateId: string;
}