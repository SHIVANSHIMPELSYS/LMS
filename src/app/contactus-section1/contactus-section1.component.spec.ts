import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusSection1Component } from './contactus-section1.component';

describe('ContactusSection1Component', () => {
  let component: ContactusSection1Component;
  let fixture: ComponentFixture<ContactusSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
