import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByPNRComponent } from './view-by-pnr.component';

describe('ViewByPNRComponent', () => {
  let component: ViewByPNRComponent;
  let fixture: ComponentFixture<ViewByPNRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByPNRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByPNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
