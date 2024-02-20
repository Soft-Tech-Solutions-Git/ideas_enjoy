import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerrajesComponent } from './herrajes.component';

describe('HerrajesComponent', () => {
  let component: HerrajesComponent;
  let fixture: ComponentFixture<HerrajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerrajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerrajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
