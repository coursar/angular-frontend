import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { PurchaseListItemComponent } from './components/purchase-list-item/purchase-list-item.component';
import { AttributeDirective } from './directives/Attribute/attribute.directive';
import { StructuralDirective } from './directives/structural/structural.directive';
import { RepeatableDirective } from './directives/repeatable/repeatable.directive';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseListComponent,
    PurchaseListItemComponent,
    AttributeDirective,
    StructuralDirective,
    RepeatableDirective,
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
