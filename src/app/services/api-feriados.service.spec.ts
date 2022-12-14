import { TestBed } from '@angular/core/testing';

import { ApiFeriadosService } from './api-feriados.service';

describe('ApiFeriadosService', () => {
  let service: ApiFeriadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFeriadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
