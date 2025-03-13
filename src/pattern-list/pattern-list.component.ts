import { Component, Inject } from '@angular/core';
import {PatternService} from './pattern.service'
@Component({
  selector: 'pattern-list',
  templateUrl: './pattern-list.html',
  styleUrl: './pattern-list.css',
})
export class PatternListComponent {
  constructor(@Inject(PatternService) patternService: PatternService){
    patternService.getPatterns().subscribe((values) => {console.log("values", values)})

  }
}
