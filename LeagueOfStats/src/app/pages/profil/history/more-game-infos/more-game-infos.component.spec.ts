import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreGameInfosComponent } from './more-game-infos.component';

describe('MoreGameInfosComponent', () => {
  let component: MoreGameInfosComponent;
  let fixture: ComponentFixture<MoreGameInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreGameInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreGameInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
