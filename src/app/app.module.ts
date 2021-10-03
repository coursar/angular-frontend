import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { PurchaseListItemComponent } from './components/purchase-list-item/purchase-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseListComponent,
    PurchaseListItemComponent,
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
