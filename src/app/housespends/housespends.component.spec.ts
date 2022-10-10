import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousespendsComponent } from './housespends.component';

describe('HousespendsComponent', () => {
  let component: HousespendsComponent;
  let fixture: ComponentFixture<HousespendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousespendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousespendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
