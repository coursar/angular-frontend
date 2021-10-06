import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';
import { PurchaseEditFormComponent } from '../purchase-edit-form/purchase-edit-form.component';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  attribute = '';
  items: PurchaseDto[] = [];
  @ViewChild(PurchaseEditFormComponent) editForm?: PurchaseEditFormComponent;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.items.push(new PurchaseDto(
        i + 1,
        'Water',
        100 + i,
      ));
    }
  }

  onRemoveItem($event: PurchaseDto) {
    this.items = this.items.filter(o => o.id !== $event.id);
  }

  onEditItem($event: PurchaseDto) {
    if (this.editForm) {
      this.editForm.item = $event;
    }
  }

  onEnter($event: string) {
    this.attribute = $event;
  }

  onSave($event: PurchaseDto) {
    debugger;
    if ($event.id === 0) {
      $event.id = Date.now(); // demo stuff
      this.items.push($event);
      return;
    }
    this.items = this.items.map(o => o.id !== $event.id ? o : $event);
  }
}
