import { TestBed } from '@angular/core/testing';

import { AwRedditService } from './aw-reddit.service';

describe('AwRedditService', () => {
  let service: AwRedditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwRedditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
