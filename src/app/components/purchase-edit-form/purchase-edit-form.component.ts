import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseModel } from '../../models/purchase-model';
import { NgForm, NgModel } from '@angular/forms';
import { AbstractFormComponent } from '../abstract-form/abstract-form.component';

@Component({
  selector: 'app-purchase-edit-form',
  templateUrl: './purchase-edit-form.component.html',
  styleUrls: ['./purchase-edit-form.component.css'],
})
export class PurchaseEditFormComponent extends AbstractFormComponent implements OnInit {
  model = new PurchaseModel(
    // id = 0 - new item, id != 0 - existing item
    0,
    '',
    '',
  );
  @ViewChild(NgForm, {static: true}) form?: NgForm;
  error?: { [key: string]: any;};

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

  onRegister() {
    this.error = {

    };
  }

  onSave() {

  }
}
