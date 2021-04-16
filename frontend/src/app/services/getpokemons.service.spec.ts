import { TestBed } from '@angular/core/testing';

import { GetpokemonsService } from './getpokemons.service';

describe('GetpokemonsService', () => {
  let service: GetpokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
