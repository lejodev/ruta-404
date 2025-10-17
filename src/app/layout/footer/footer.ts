import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [SHARED_MATERIAL_IMPORTS],
  // standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(private scrollService: ScrollService) { }

  scrollTo(id: string) {
    this.scrollService.scrollToSection(id)
  }

}
