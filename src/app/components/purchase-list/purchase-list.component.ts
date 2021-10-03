import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  @Input() items: PurchaseDto[] = [];
  @Output() removeItem = new EventEmitter<PurchaseDto>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem($event: PurchaseDto) {
    this.removeItem.emit($event);
  }
}
