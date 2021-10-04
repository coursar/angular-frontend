import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatable]'
})
export class RepeatableDirective implements OnChanges {
  @Input() appRepeatable: any[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();
    this.appRepeatable.forEach(o => {
      this.container.createEmbeddedView(
        this.template,
        {item: o}
      )
    });
  }

}
