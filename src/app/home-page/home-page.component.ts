import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
})
export class HomePageComponent {}
