import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningGridComponent } from './planning-grid.component';

describe('PlanningGridComponent', () => {
  let component: PlanningGridComponent;
  let fixture: ComponentFixture<PlanningGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
