import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMoneyComponent } from './copy-money.component';

describe('CopyMoneyComponent', () => {
  let component: CopyMoneyComponent;
  let fixture: ComponentFixture<CopyMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
