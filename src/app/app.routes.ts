import { Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list-page/pattern-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConverterComponent } from './converter-page/converter-page.component';
import { CalculatorCircleSkirtComponent } from './calculator-circle-skirt-page/calculator-circle-skirt-page.component';

// Définir les routes
export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Route par défaut pour la page d'accueil
  { path: 'sewtopia', component: HomePageComponent }, // Page d'accueil avec "sewtopia"
  { path: 'sewtopia/pattern-list', component: PatternListComponent }, 
  { path: 'sewtopia/converter', component: ConverterComponent },
  { path: 'sewtopia/calculator', component: CalculatorCircleSkirtComponent }
];
