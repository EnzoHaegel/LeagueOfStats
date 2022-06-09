import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunePopoverComponent } from './rune-popover.component';

describe('RunePopoverComponent', () => {
  let component: RunePopoverComponent;
  let fixture: ComponentFixture<RunePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunePopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
