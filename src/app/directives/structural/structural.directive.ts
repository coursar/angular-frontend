import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective implements OnChanges {
  @Input() appStructural: boolean = false;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['appStructural'];
    if (value === undefined) {
      return;
    }

    if (value.currentValue) {
       this.container.createEmbeddedView(this.template);
       return;
    }

    this.container.clear();
  }

}
