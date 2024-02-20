import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerramientosComponent } from './cerramientos.component';

describe('CerramientosComponent', () => {
  let component: CerramientosComponent;
  let fixture: ComponentFixture<CerramientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerramientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerramientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
