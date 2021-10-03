import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseListItemComponent } from './purchase-list-item.component';

describe('PurchaseListItemComponent', () => {
  let component: PurchaseListItemComponent;
  let fixture: ComponentFixture<PurchaseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
