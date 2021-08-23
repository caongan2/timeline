import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimlinesComponent } from './timlines.component';

describe('TimlinesComponent', () => {
  let component: TimlinesComponent;
  let fixture: ComponentFixture<TimlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
