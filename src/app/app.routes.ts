import { Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list-page/pattern-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConverterComponent } from './converter-page/converter-page';
import { CalculatorCircleSkirtComponent } from './calculator-circle-skirt-page/calculator-circle-skirt-page';
import { FavoritePatternsPageComponent } from './favorite-patterns-page/favorite-patterns-page';
import { PatternDetailsPageComponent } from './pattern-detail-page/pattern-detail-page';

// Définir les routes
export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Page d'accueil
  { path: 'mes-patrons', component: PatternListComponent },
  { path: 'convertisseur-mesures', component: ConverterComponent },
  { path: 'calculateur-jupe-cercle', component: CalculatorCircleSkirtComponent },
  { path: 'patrons-favoris', component: FavoritePatternsPageComponent},
  // { path: 'patron-details/:id', component: PatternDetailsPageComponent}

];
