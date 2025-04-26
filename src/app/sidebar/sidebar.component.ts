import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.compoment.html',
  imports: [MenuItemComponent],
})
export class SidebarComponent {}
