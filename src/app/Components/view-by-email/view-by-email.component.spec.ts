import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByEmailComponent } from './view-by-email.component';

describe('ViewByEmailComponent', () => {
  let component: ViewByEmailComponent;
  let fixture: ComponentFixture<ViewByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
