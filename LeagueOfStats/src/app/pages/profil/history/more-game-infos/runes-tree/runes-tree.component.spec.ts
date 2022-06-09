import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesTreeComponent } from './runes-tree.component';

describe('RunesTreeComponent', () => {
  let component: RunesTreeComponent;
  let fixture: ComponentFixture<RunesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunesTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
