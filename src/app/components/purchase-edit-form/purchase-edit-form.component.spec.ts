import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEditFormComponent } from './purchase-edit-form.component';

describe('PurchaseEditFormComponent', () => {
  let component: PurchaseEditFormComponent;
  let fixture: ComponentFixture<PurchaseEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
