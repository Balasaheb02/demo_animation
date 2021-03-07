import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetAddressComponent } from './internet-address.component';

describe('InternetAddressComponent', () => {
  let component: InternetAddressComponent;
  let fixture: ComponentFixture<InternetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
