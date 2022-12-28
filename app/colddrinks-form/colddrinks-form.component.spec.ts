import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColddrinksFormComponent } from './colddrinks-form.component';

describe('ColddrinksFormComponent', () => {
  let component: ColddrinksFormComponent;
  let fixture: ComponentFixture<ColddrinksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColddrinksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColddrinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
