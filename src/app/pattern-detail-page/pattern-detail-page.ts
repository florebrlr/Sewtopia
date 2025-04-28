import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'pattern-detail-page',
  templateUrl: './pattern-detail-page.html',
  styleUrl: './pattern-detail-page.css',
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
})
export class PatternDetailsPageComponent {

}
