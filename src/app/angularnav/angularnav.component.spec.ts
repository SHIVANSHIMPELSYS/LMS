import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularnavComponent } from './angularnav.component';

describe('AngularnavComponent', () => {
  let component: AngularnavComponent;
  let fixture: ComponentFixture<AngularnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
