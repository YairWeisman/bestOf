import { TestBed, inject } from '@angular/core/testing';

import { Top100ofService } from './top100of.service';

describe('Top100ofService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Top100ofService]
    });
  });

  it('should be created', inject([Top100ofService], (service: Top100ofService) => {
    expect(service).toBeTruthy();
  }));
});
