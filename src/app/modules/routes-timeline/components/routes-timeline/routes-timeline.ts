import { Component, OnInit } from '@angular/core';
import { RoutesTimelineService } from '../../services/routes-timeline';
import { IRoutesTimeline } from '../../interfaces/routes-timeline';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-routes-timeline',
  imports: [SHARED_MATERIAL_IMPORTS, CommonModule],
  templateUrl: './routes-timeline.html',
  styleUrl: './routes-timeline.scss'
})
export class RoutesTimeline implements OnInit {

  routesHistory!: IRoutesTimeline[];
  
  public currentOpenRouteId: number | null = null; 

  constructor(private rideHistoryService: RoutesTimelineService) { }

  ngOnInit(): void {
    this.routesHistory = this.rideHistoryService.getRideHistory();
    console.log(this.routesHistory);
  }

  toggleGallery(routeId: number): void {
    if (this.currentOpenRouteId === routeId) {
      this.currentOpenRouteId = null;
    } else {
      this.currentOpenRouteId = routeId;
    }
  }

  isRouteOpen(routeId: number): boolean {
    return this.currentOpenRouteId === routeId;
  }
}