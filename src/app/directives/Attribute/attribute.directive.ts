import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appAttribute]',
})
export class AttributeDirective {
  @Input() @HostBinding('attr.data-id') appAttribute = '';
  @Output() appAttributeChange = new EventEmitter<string>();

  // DI
  constructor() {}

  @HostListener('mouseenter')
  onEnter() {
    this.appAttributeChange.emit(new Date().toUTCString());
  }
}
