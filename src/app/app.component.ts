import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "./reducers";
import {likesLikes} from "./actions/like.actions";
import {likesDislikes} from "./actions/dislike.actions";
import {InputFieldComponent} from "./components/forms/input-field/input-field.component";

function determineType(type: string) {
  switch (type) {
    case 'input':
      return InputFieldComponent;
    default:
      throw new Error('field usupported');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Alt + Insert -> generation
// Alt + Enter -> fix
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  likes$: Observable<number>;
  @ViewChild('tplContainer', {read: ViewContainerRef, static: true}) container?: ViewContainerRef;
  components?: ComponentRef<any>[];

  structure = {
    fields: [
      {
        type: 'input', value: '', placeholder: 'Phone number', validators: [
          {type: 'regex', value: '...'},
          {type: 'minlength', value: '...'},
        ]
      },
      {
        type: 'input', value: '', placeholder: 'Card number', validators: [
          {type: 'regex', value: '...'},
          {type: 'minlength', value: '...'},
        ]
      }
    ],
    buttons: [
      {type: 'primary', text: 'save'},
      {type: 'secondary', text: 'draft'},
      {type: 'cancel', text: '...'},
    ]
  };

  constructor(private store: Store<State>, private resolver: ComponentFactoryResolver) {
    this.likes$ = this.store.select('likes');
  }

  ngOnInit(): void {
    this.loadComponents();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    this.components?.forEach(component => {
      component.instance.valueChange.unsubscribe();
      component.destroy();
    });
  }

  loadComponents() {
    this.structure?.fields?.forEach(field => {
      const componentType = determineType(field.type);
      const factory = this.resolver.resolveComponentFactory(componentType);
      const component = this.container?.createComponent(factory);
      if (component?.instance) {
        // TODO: дальше настраиваете так, как вам нужно, исходя из типа, а также добавляете валидаторы (если Angular < 8, то придётся реализовывать на базе методов)
        component.instance.value = field.value;
        component.instance.placeholder = field.placeholder;
        // если нужно не только отображать, но и читать значение, обновляя модель
        component.instance.valueChange.subscribe(value => {
          field.value = value;
        });
      }
    });
    this.structure?.buttons?.forEach(button => {
      // аналогично для кнопок
    });
  }

  onLike() {
    this.store.dispatch(likesLikes());
  }

  onDislike() {
    this.store.dispatch(likesDislikes());
  }
}
