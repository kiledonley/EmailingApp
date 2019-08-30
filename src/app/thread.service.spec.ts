import { TestBed } from '@angular/core/testing';

import { ThreadService } from './thread.service';

describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreadService = TestBed.get(ThreadService);
    expect(service).toBeTruthy();
  });
});
