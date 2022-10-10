import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodambakkamComponent } from './kodambakkam.component';

describe('KodambakkamComponent', () => {
  let component: KodambakkamComponent;
  let fixture: ComponentFixture<KodambakkamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodambakkamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KodambakkamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
