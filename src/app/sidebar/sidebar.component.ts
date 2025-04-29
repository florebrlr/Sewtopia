import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [MenuItemComponent],
})
export class SidebarComponent {}
