import { TestBed } from '@angular/core/testing';

import { SavepokemonsService } from './savepokemons.service';

describe('SavepokemonsService', () => {
  let service: SavepokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavepokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
