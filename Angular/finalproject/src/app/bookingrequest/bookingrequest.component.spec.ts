import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingrequestComponent } from './bookingrequest.component';

describe('BookingrequestComponent', () => {
  let component: BookingrequestComponent;
  let fixture: ComponentFixture<BookingrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingrequestComponent]
    });
    fixture = TestBed.createComponent(BookingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
