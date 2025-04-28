import { Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list-page/pattern-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConverterComponent } from './converter-page/converter-page';
import { CalculatorCircleSkirtComponent } from './calculator-circle-skirt-page/calculator-circle-skirt-page';
import { FavoritePatternsPageComponent } from './favorite-patterns-page/favorite-patterns-page';

// Définir les routes
export const routes: Routes = [
  { path: '/sewtopia', component: HomePageComponent }, // Page d'accueil
  { path: 'sewtopia/mes-patrons', component: PatternListComponent },
  { path: 'convertisseur-mesures', component: ConverterComponent },
  { path: 'calculateur-jupe-cercle', component: CalculatorCircleSkirtComponent },
  { path: 'patrons-favoris', component: FavoritePatternsPageComponent},

];
