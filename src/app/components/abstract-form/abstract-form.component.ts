import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

export abstract class AbstractFormComponent {
  isInvalid(model: NgModel) {
    return (model.dirty || model.touched) && model.invalid;
  }

  isValid(model: NgModel) {
    return (model.dirty || model.touched) && model.valid;
  }
}
