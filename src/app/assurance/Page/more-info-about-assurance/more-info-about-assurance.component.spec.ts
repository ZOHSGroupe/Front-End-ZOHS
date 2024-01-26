import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoAboutAssuranceComponent } from './more-info-about-assurance.component';

describe('MoreInfoAboutAssuranceComponent', () => {
  let component: MoreInfoAboutAssuranceComponent;
  let fixture: ComponentFixture<MoreInfoAboutAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoAboutAssuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreInfoAboutAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
