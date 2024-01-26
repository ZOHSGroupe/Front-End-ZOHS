import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoAboutVehiculeComponent } from './more-info-about-vehicule.component';

describe('MoreInfoAboutVehiculeComponent', () => {
  let component: MoreInfoAboutVehiculeComponent;
  let fixture: ComponentFixture<MoreInfoAboutVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoAboutVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreInfoAboutVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
