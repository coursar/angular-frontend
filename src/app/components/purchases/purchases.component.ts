import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {PurchaseDto} from '../../dto/purchase-dto';
import {PurchaseEditFormComponent} from '../purchase-edit-form/purchase-edit-form.component';
import {PurchasesService} from "../../services/purchases/purchases.service";
import {DemoComponent} from "../demo/demo.component";
import {AComponent} from "../a/a.component";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit, OnDestroy, AfterViewInit {
  attribute = '';
  items: PurchaseDto[] = [];
  @ViewChild(PurchaseEditFormComponent) editForm?: PurchaseEditFormComponent;
  listLoading = false;
  listError: string | null = null;

  itemSaveLoading = false;
  itemSaveError: string | null = null;

  constructor(private service: PurchasesService) {
  }

  // xhr, fetch -> !2xx
  // ajax (RxJS), HttpClient (Angular)
  ngOnInit(): void {
    this.loadData();
    this.service.getReload().subscribe(
      value => this.loadData(),
    );
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  onRemoveItem($event: PurchaseDto) {
    this.items = this.items.filter(o => o.id !== $event.id);
  }

  onEditItem($event: PurchaseDto) {
    if (this.editForm) {
      this.editForm.item = $event;
    }
  }

  onEnter($event: string) {
    this.attribute = $event;
  }

  onSave($event: PurchaseDto) {
    this.itemSaveLoading = true;
    this.service.save($event).subscribe(
      data => {
        this.itemSaveLoading = false;
        const index = this.items.findIndex(o => o.id === data.id);
        if (index !== -1) {
          this.items[index] = data;
          return;
        }
        this.items.push(data);
        this.editForm?.resetForm();
      },
      error => {
        console.log(error)
        this.itemSaveLoading = false;
        this.itemSaveError = error.message;
      },
    );
  }

  onReload() {
    this.loadData();
  }

  private loadData() {
    this.listLoading = true;
    this.listError = null;
    this.service.getAll().subscribe(
      data => {
        this.listLoading = false;
        this.items = data
      },
      error => {
        this.listLoading = false;
        console.log(error)
        this.listError = error.message;
      },
    );
  }
}
