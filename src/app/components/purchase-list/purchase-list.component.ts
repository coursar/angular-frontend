import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  @Input() items: PurchaseDto[] = [];
  @Output() editItem = new EventEmitter<PurchaseDto>();
  @Output() removeItem = new EventEmitter<PurchaseDto>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditItem($event: PurchaseDto) {
    this.editItem.emit($event);
  }

  onRemoveItem($event: PurchaseDto) {
    this.removeItem.emit($event);
  }
}
