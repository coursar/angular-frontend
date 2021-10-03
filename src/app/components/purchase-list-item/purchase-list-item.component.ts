import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';

@Component({
  selector: 'app-purchase-list-item',
  templateUrl: './purchase-list-item.component.html',
  styleUrls: ['./purchase-list-item.component.css']
})
export class PurchaseListItemComponent implements OnInit {
  @Input() item?: PurchaseDto;
  @Output() remove = new EventEmitter<PurchaseDto>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit(this.item);
  }
}
