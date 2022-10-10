import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustpuramComponent } from './trustpuram.component';

describe('TrustpuramComponent', () => {
  let component: TrustpuramComponent;
  let fixture: ComponentFixture<TrustpuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustpuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustpuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
