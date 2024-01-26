import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoAboutDriverLicenseComponent } from './more-info-about-driver-license.component';

describe('MoreInfoAboutDriverLicenseComponent', () => {
  let component: MoreInfoAboutDriverLicenseComponent;
  let fixture: ComponentFixture<MoreInfoAboutDriverLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoAboutDriverLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreInfoAboutDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
