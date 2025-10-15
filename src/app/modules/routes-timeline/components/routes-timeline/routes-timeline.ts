import { Component, OnInit } from '@angular/core';
import { RoutesTimelineService } from '../../services/routes-timeline';
import { IRoutesTimeline } from '../../interfaces/routes-timeline';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routes-timeline',
  imports: [SHARED_MATERIAL_IMPORTS, CommonModule],
  templateUrl: './routes-timeline.html',
  styleUrl: './routes-timeline.scss'
})
export class RoutesTimeline implements OnInit {

  routesHistory!: IRoutesTimeline[];

  constructor(private rideHistoryService: RoutesTimelineService) { }

  ngOnInit(): void {
    this.routesHistory = this.rideHistoryService.getRideHistory()
    console.log(this.routesHistory);

  }


}
