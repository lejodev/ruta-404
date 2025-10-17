import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { RoutesTimeline } from '../../../routes-timeline/components/routes-timeline/routes-timeline';

@Component({
  selector: 'app-home',
  imports: [SHARED_MATERIAL_IMPORTS, RoutesTimeline],
  // standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

}
