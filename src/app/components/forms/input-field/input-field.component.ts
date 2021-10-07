import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Validator} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() value?: string
  @Input() placeholder?: string
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  addValidator(validator: Validator) {

  }

  ngOnInit(): void {
  }

  onChange($event: string) {
    this.valueChange.emit($event);
  }

}
