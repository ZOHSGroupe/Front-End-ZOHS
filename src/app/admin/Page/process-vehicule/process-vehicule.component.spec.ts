import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessVehiculeComponent } from './process-vehicule.component';

describe('ProcessVehiculeComponent', () => {
  let component: ProcessVehiculeComponent;
  let fixture: ComponentFixture<ProcessVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
