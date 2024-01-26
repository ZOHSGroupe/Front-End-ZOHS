import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessClientComponent } from './process-client.component';

describe('ProcessClientComponent', () => {
  let component: ProcessClientComponent;
  let fixture: ComponentFixture<ProcessClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
