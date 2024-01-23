import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDriverLicenseComponent } from './show-driver-license.component';

describe('ShowDriverLicenseComponent', () => {
  let component: ShowDriverLicenseComponent;
  let fixture: ComponentFixture<ShowDriverLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDriverLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
