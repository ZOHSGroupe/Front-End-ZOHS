import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAssuranceComponent } from './process-assurance.component';

describe('ProcessAssuranceComponent', () => {
  let component: ProcessAssuranceComponent;
  let fixture: ComponentFixture<ProcessAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessAssuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
