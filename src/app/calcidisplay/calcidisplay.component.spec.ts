import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcidisplayComponent } from './calcidisplay.component';

describe('CalcidisplayComponent', () => {
  let component: CalcidisplayComponent;
  let fixture: ComponentFixture<CalcidisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcidisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcidisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
