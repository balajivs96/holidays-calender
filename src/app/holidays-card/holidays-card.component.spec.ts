import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysCardComponent } from './holidays-card.component';

describe('HolidaysCardComponent', () => {
  let component: HolidaysCardComponent;
  let fixture: ComponentFixture<HolidaysCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaysCardComponent]
    });
    fixture = TestBed.createComponent(HolidaysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
