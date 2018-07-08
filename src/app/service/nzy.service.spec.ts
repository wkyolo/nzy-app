import { TestBed, inject } from '@angular/core/testing';

import { NzyService } from './nzy.service';

describe('NzyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NzyService]
    });
  });

  it('should be created', inject([NzyService], (service: NzyService) => {
    expect(service).toBeTruthy();
  }));
});
