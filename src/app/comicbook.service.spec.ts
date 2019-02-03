import { TestBed } from '@angular/core/testing';

import { ComicbookService } from './comicbook.service';

describe('ComicbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicbookService = TestBed.get(ComicbookService);
    expect(service).toBeTruthy();
  });
});
