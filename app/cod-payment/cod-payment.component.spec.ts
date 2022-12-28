import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CODPaymentComponent } from './cod-payment.component';

describe('CODPaymentComponent', () => {
  let component: CODPaymentComponent;
  let fixture: ComponentFixture<CODPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CODPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CODPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
