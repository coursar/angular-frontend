import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PurchaseDto } from '../../dto/purchase-dto';
import {PlaceEnum} from "../../enums/place-enum";

@Component({
  selector: 'app-purchase-list-item',
  templateUrl: './purchase-list-item.component.html',
  styleUrls: ['./purchase-list-item.component.css']
})
export class PurchaseListItemComponent implements OnInit {
  @Input() item?: PurchaseDto;
  @Output() remove = new EventEmitter<PurchaseDto>();
  @Output() edit = new EventEmitter<PurchaseDto>();
  placeEnum = PlaceEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    if (this.item) {
      this.item.price -= 1000;
    }
    // this.edit.emit(this.item);
  }

  onRemove() {
    this.remove.emit(this.item);
  }
}
