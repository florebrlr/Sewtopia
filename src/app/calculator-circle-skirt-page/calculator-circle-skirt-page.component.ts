import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'calculator-circle-skirt-page',
  templateUrl: './calculator-circle-skirt-page.coponent.html',
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
})
export class CalculatorCircleSkirtComponent {}
