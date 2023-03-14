import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployePageViewComponent } from './employe-page-view.component';

describe('EmployePageViewComponent', () => {
  let component: EmployePageViewComponent;
  let fixture: ComponentFixture<EmployePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployePageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
