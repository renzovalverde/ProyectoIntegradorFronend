import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaAsientoComponent } from './sala-asiento.component';

describe('SalaAsientoComponent', () => {
  let component: SalaAsientoComponent;
  let fixture: ComponentFixture<SalaAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaAsientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
