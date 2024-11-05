import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TformnointerfaceComponent } from './tformnointerface.component';

describe('TformnointerfaceComponent', () => {
  let component: TformnointerfaceComponent;
  let fixture: ComponentFixture<TformnointerfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TformnointerfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TformnointerfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
