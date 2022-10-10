import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetcalculateComponent } from './netcalculate.component';

describe('NetcalculateComponent', () => {
  let component: NetcalculateComponent;
  let fixture: ComponentFixture<NetcalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetcalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetcalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
