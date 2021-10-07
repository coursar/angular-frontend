import {AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {AComponent} from "../a/a.component";
import {PurchaseEditFormComponent} from "../purchase-edit-form/purchase-edit-form.component";

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChild(PurchaseEditFormComponent) component?: PurchaseEditFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.component);
  }

  ngAfterViewInit(): void {
    // console.log(this.component);
  }

}
