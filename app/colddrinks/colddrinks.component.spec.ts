import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColddrinksComponent } from './colddrinks.component';

describe('ColddrinksComponent', () => {
  let component: ColddrinksComponent;
  let fixture: ComponentFixture<ColddrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColddrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColddrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
