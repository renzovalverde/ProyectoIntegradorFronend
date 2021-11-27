import { TestBed } from '@angular/core/testing';

import { PeliculaDetalleService } from './pelicula-detalle.service';

describe('PeliculaDetalleService', () => {
  let service: PeliculaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
