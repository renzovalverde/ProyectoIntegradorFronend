import { TestBed } from '@angular/core/testing';

import { SalaAsientoService } from './sala-asiento.service';

describe('SalaAsientoService', () => {
  let service: SalaAsientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaAsientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
