import {
  ChangeDetectorRef,
  Directive, DoCheck,
  Input, IterableDiffer,
  IterableDiffers,
  OnChanges, OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepeatableOf]'
})
export class RepeatableDirective implements OnInit, DoCheck {
  @Input() appRepeatableOf: any[] = [];
  private differ?: IterableDiffer<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
    private differs: IterableDiffers,
    private detector: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.differ = this.differs.find(this.appRepeatableOf).create();
  }

  ngDoCheck(): void {
    const changes = this.differ?.diff(this.appRepeatableOf);
    if (changes === null) {
      return;
    }

    changes?.forEachAddedItem(o => {
      this.container.createEmbeddedView(
        this.template,
        {'$implicit': o.item},
      );
    });

    // TODO: move

    changes?.forEachRemovedItem(o => {
      if (o.previousIndex !== null) {
        this.container.remove(o.previousIndex);
      }
    });
  }

}
