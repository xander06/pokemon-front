import { TestBed } from '@angular/core/testing';

import { DetailpokemonService } from './detailpokemon.service';

describe('DetailpokemonService', () => {
  let service: DetailpokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailpokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
