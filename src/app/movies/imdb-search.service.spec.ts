import { TestBed } from '@angular/core/testing';

import { ImdbSearchService } from './imdb-search.service';

describe('ImdbSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImdbSearchService = TestBed.get(ImdbSearchService);
    expect(service).toBeTruthy();
  });
});
