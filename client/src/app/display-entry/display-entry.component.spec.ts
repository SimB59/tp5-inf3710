import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEntryComponent } from './display-entry.component';

describe('DisplayEntryComponent', () => {
  let component: DisplayEntryComponent;
  let fixture: ComponentFixture<DisplayEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
