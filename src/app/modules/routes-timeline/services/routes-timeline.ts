import { Injectable } from '@angular/core';
import { IRoutesTimeline } from '../interfaces/routes-timeline';
import { routes } from '../mocks/routes.mock';


@Injectable({
  providedIn: 'root'
})
export class RoutesTimelineService {

  routes!: IRoutesTimeline[]

  setRides(): void {
    this.routes = routes
  }

  getRideHistory(): IRoutesTimeline[] {
    this.setRides()
    return this.routes
  }

}
