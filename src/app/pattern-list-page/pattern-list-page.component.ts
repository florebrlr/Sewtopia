import { Component, Inject } from '@angular/core';
import {PatternService} from './pattern.service-page'
@Component({
  selector: 'pattern-list',
  templateUrl: './pattern-list-page.html',
  styleUrl: './pattern-list-page.css',
})
export class PatternListComponent {
  constructor(@Inject(PatternService) patternService: PatternService){
    patternService.getPatterns().subscribe((values) => {console.log("values", values)})

  }
}
