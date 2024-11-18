import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFiltersComponent } from './food-filters.component';

describe('FoodFiltersComponent', () => {
  let component: FoodFiltersComponent;
  let fixture: ComponentFixture<FoodFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
