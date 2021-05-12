import { TestBed } from '@angular/core/testing';

import { ActivityPushService } from './activity-push.service';

describe('ActivityPushService', () => {
  let service: ActivityPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
