import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookPageComponent } from './ticketbook-page.component';

describe('TicketbookPageComponent', () => {
  let component: TicketbookPageComponent;
  let fixture: ComponentFixture<TicketbookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
