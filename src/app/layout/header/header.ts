import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../shared/material/material.imports';

@Component({
  selector: 'app-header',
  imports: [SHARED_MATERIAL_IMPORTS],
  // standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
