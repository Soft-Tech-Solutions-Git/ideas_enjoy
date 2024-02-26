import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWtsComponent } from './btn-wts.component';

describe('BtnWtsComponent', () => {
  let component: BtnWtsComponent;
  let fixture: ComponentFixture<BtnWtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
