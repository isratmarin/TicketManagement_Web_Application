import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingmanageComponent } from './bookingmanage.component';

describe('BookingmanageComponent', () => {
  let component: BookingmanageComponent;
  let fixture: ComponentFixture<BookingmanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingmanageComponent]
    });
    fixture = TestBed.createComponent(BookingmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
