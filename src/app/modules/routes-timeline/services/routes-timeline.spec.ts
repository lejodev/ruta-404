import { TestBed } from '@angular/core/testing';

import { RoutesTimeline } from './routes-timeline';

describe('RoutesTimeline', () => {
  let service: RoutesTimeline;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesTimeline);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
