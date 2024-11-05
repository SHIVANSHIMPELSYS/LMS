import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrompracticeComponent } from './frompractice.component';

describe('FrompracticeComponent', () => {
  let component: FrompracticeComponent;
  let fixture: ComponentFixture<FrompracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrompracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrompracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
