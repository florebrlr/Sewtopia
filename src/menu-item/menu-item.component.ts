import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
  imports: [RouterModule]
})
export class MenuItemComponent {
    label= input("")
    link=input('')
}
