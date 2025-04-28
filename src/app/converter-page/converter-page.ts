import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-converter',
  templateUrl: './converter-page.html',
  styleUrl: './converter-page.css',
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
})
export class ConverterComponent {
  valeur: number = 0; // La valeur entrée par l'utilisateur est initialisée à 0.
  uniteSource: string = 'cm'; // Unité de départ en cm
  uniteCible: string = 'inch'; // Unité de conversion en inch
  resultat: number | null = null;

  // Ici les différentes unités converties en mètres
  conversionVersMetre: { [key: string]: number } = {
    cm: 0.01,
    inch: 0.0254,
    m: 1,
    mm: 0.001,
    yd: 0.9144,
  };

  // Fonction convertir()
  convertir() {
    if (this.valeur == null) {
      this.resultat = null;
      return;
    }

    const valeurEnMetres = this.valeur * this.conversionVersMetre[this.uniteSource];
    this.resultat = valeurEnMetres / this.conversionVersMetre[this.uniteCible];
  }
}
