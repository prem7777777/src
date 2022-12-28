import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFunComponent } from './shop-fun.component';

describe('ShopFunComponent', () => {
  let component: ShopFunComponent;
  let fixture: ComponentFixture<ShopFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
