import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  items: PurchaseDto[] = [];

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
}
