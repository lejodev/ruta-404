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

}
