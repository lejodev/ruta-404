import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesTimeline } from './routes-timeline';

describe('RoutesTimeline', () => {
  let component: RoutesTimeline;
  let fixture: ComponentFixture<RoutesTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutesTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
