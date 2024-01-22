import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenseComponent } from './driver-license.component';

describe('DriverLicenseComponent', () => {
  let component: DriverLicenseComponent;
  let fixture: ComponentFixture<DriverLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
