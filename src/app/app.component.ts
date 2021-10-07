import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';
import {fromEvent, of} from "rxjs";
import {catchError, debounceTime, filter, map, switchMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {static: true, read: ViewContainerRef})
  container?: ViewContainerRef;
  @ViewChild('tplSearch', {static: true}) search?: ElementRef<HTMLInputElement>

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.search) {
      fromEvent(this.search.nativeElement, 'input')
        .pipe(
          debounceTime(100),
          map(o => (o!.target as HTMLInputElement).value),
          filter(o => o.trim() !== ''),
          switchMap(
            o => ajax(`http://localhost:8080/api/search?text=${o}`)
              .pipe(
                map(o => o.response),
                catchError(err => of([]))
              )
          ),
        )
        .subscribe(evt => console.log(evt));
    }
  }

  onAddComponentA() {
    const factory = this.resolver.resolveComponentFactory(AComponent);
    this.container?.createComponent(factory);
  }

  onAddComponentB() {
    const factory = this.resolver.resolveComponentFactory(BComponent);
    this.container?.createComponent(factory);
  }
}
