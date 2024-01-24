import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssuranceComponent } from './show-assurance.component';

describe('ShowAssuranceComponent', () => {
  let component: ShowAssuranceComponent;
  let fixture: ComponentFixture<ShowAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAssuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
