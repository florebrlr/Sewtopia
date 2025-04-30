import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuIconStarComponent } from '../menu-icon-star/menu-icon-star.component';
import { MenuIconChevronRightComponent } from '../menu-icon-chevron-right/menu-icon-chevron-right.component';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
  imports: [RouterModule,MenuIconStarComponent,MenuIconChevronRightComponent]
})
export class MenuItemComponent {
    label= input("")
    link=input('')
}
