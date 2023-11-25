import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDoctorComponent } from './modify-doctor.component';

describe('ModifyDoctorComponent', () => {
  let component: ModifyDoctorComponent;
  let fixture: ComponentFixture<ModifyDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
