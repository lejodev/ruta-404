import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../shared/material/material.imports';

@Component({
  selector: 'app-footer',
  imports: [SHARED_MATERIAL_IMPORTS],
  // standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
