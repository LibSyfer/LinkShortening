import { TestBed } from '@angular/core/testing';

import { RedirectionLinkService } from './redirection-link.service';

describe('RedirectionLinkService', () => {
  let service: RedirectionLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectionLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
