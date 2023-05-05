import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineventosComponent } from './admineventos.component';

describe('AdmineventosComponent', () => {
  let component: AdmineventosComponent;
  let fixture: ComponentFixture<AdmineventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
