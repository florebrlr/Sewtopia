import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PatternDetailsPageComponent } from "../pattern-detail-page/pattern-detail-page";

@Component({
  selector: 'app-favorite-patterns-page',
  templateUrl: './favorite-patterns-page.html',
  styleUrl: './favorite-patterns-page.css',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, PatternDetailsPageComponent],
})
export class FavoritePatternsPageComponent {

}
