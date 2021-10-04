import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatableOf]'
})
export class RepeatableDirective implements OnChanges {
  @Input() appRepeatableOf: any[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();
    this.appRepeatableOf.forEach(o => {
      this.container.createEmbeddedView(
        this.template,
        {'$implicit': o}
      )
    });
  }

}
