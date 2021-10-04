import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { PurchaseListItemComponent } from './components/purchase-list-item/purchase-list-item.component';
import { AttributeDirective } from './directives/Attribute/attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseListComponent,
    PurchaseListItemComponent,
    AttributeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
