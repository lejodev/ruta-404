import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';

@Component({
  selector: 'app-home',
  imports: [SHARED_MATERIAL_IMPORTS],
  // standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
