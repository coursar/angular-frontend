import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent {
  @ViewChild('container', {static: true, read: ViewContainerRef})
  container?: ViewContainerRef;
  componentRef?: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  onAddComponentA() {
    this.container?.clear();
    const factory = this.resolver.resolveComponentFactory(AComponent);
    this.componentRef = this.container?.createComponent(factory);
    // FIXME: unsubscribe
    if (this.componentRef) {
      this.componentRef.instance.item = 'value';
      this.componentRef.instance.change.subscribe((ev: string) => {
        console.log(ev);
      });
    }
  }

  onAddComponentB() {
    this.container?.clear();
    const factory = this.resolver.resolveComponentFactory(BComponent);
    this.componentRef = this.container?.createComponent(factory);
    // FIXME: unsubscribe
    if (this.componentRef) {
      this.componentRef.instance.item = 'value';
      this.componentRef.instance.change.subscribe((ev: string) => {
        console.log(ev);
      });
    }
  }
}
