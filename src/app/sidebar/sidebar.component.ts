import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { WelcomeUserComponent } from '../welcome-user/welcome-user.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [MenuItemComponent],
})
export class SidebarComponent {

}

//logique de faire un boolean => si user connecté alors affichage de la div
