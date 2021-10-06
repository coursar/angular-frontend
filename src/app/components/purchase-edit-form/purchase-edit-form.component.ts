import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PurchaseModel } from '../../models/purchase-model';
import { NgForm, NgModel } from '@angular/forms';
import { AbstractFormComponent } from '../abstract-form/abstract-form.component';
import { PurchaseDto } from '../../dto/purchase-dto';

@Component({
  selector: 'app-purchase-edit-form',
  templateUrl: './purchase-edit-form.component.html',
  styleUrls: ['./purchase-edit-form.component.css'],
})
export class PurchaseEditFormComponent extends AbstractFormComponent implements OnInit {
  @Input() set item(value: PurchaseDto) {
    this.model = new PurchaseModel(value.id, value.name, `${value.price}`);
  }
  model = new PurchaseModel(
    // id = 0 - new item, id != 0 - existing item
    0,
    '',
    '',
  );
  @Output() save = new EventEmitter<PurchaseDto>();
  @ViewChild(NgForm) form?: NgForm;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit($event: Event, form: NgForm) {
    debugger;
  }

  onReset($event: Event, form: NgForm) {
    debugger;
  }

  onDebug(tplName: NgModel) {
    debugger;
  }

  onDraft() {
  }

  onSave() {
    if (this.form) {
      this.form.resetForm();
    }

    this.save.emit({
      ...this.model,
      name: this.model.name.trim(),
      price: Number(this.model.price.trim())
    });
  }
}
