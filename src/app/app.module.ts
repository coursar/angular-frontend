import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PurchasesComponent} from './components/purchases/purchases.component';
import {PurchaseListComponent} from './components/purchase-list/purchase-list.component';
import {PurchaseListItemComponent} from './components/purchase-list-item/purchase-list-item.component';
import {AttributeDirective} from './directives/Attribute/attribute.directive';
import {StructuralDirective} from './directives/structural/structural.directive';
import {RepeatableDirective} from './directives/repeatable/repeatable.directive';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';
import {PurchaseEditFormComponent} from './components/purchase-edit-form/purchase-edit-form.component';
import {FormsModule} from '@angular/forms';
import {PriceValidatorDirective} from './validators/price/price-validator.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NameDirective} from './validators/name/name.directive';
import {InnerComponent} from './components/inner/inner.component';
import {DemoComponent} from './components/demo/demo.component';
import {CustomJSONPipe} from './pipes/custom-json.pipe';
import {CustomCurrencyPipe} from './pipes/custom-currency.pipe';
import {AuthTokenInterceptor} from "./interceptors/auth-token.interceptor";
import {AuthService} from "./services/auth/auth.service";
import {takeUntil} from "rxjs/operators";
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { OwnerComponent } from './components/owner/owner.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseListComponent,
    PurchaseListItemComponent,
    AttributeDirective,
    StructuralDirective,
    RepeatableDirective,
    AComponent,
    BComponent,
    PurchaseEditFormComponent,
    PriceValidatorDirective,
    NameDirective,
    InnerComponent,
    DemoComponent,
    CustomJSONPipe,
    CustomCurrencyPipe,
    AuthenticatedComponent,
    AuthorizedComponent,
    OwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
