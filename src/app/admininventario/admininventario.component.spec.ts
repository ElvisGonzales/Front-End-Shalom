import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininventarioComponent } from './admininventario.component';

describe('AdmininventarioComponent', () => {
  let component: AdmininventarioComponent;
  let fixture: ComponentFixture<AdmininventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmininventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
