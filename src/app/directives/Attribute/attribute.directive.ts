import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  exportAs: 'appAttribute',
})
export class AttributeDirective {
  @Input() @HostBinding('attr.data-id') appAttribute = '';
  @Output() appAttributeChange = new EventEmitter<string>();
  value = 'secret';

  // DI
  constructor() {
  }

  @HostListener('mouseenter')
  onEnter() {
    this.appAttributeChange.emit(new Date().toUTCString());
  }
}
