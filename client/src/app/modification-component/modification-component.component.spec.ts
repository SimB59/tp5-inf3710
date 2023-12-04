import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationComponentComponent } from './modification-component.component';

describe('ModificationComponentComponent', () => {
  let component: ModificationComponentComponent;
  let fixture: ComponentFixture<ModificationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
