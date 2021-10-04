import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit, OnChanges {
  @Input() appAttribute = '';
  @Output() appAttributeChange = new EventEmitter<string>();
  // DI
  constructor(
    private element: ElementRef
  ) {
    console.log(this.appAttribute);
  }

  ngOnInit(): void {
    console.log(this.appAttribute);
    this.element.nativeElement.setAttribute(
      'data-id', this.appAttribute,
    );
    this.element.nativeElement.onmouseenter = () => {
      this.appAttributeChange.emit(new Date().toUTCString());
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
