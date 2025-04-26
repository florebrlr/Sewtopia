import { Routes } from '@angular/router';
import { PatternListComponent } from './pattern-list-page/pattern-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';

//définir les routes
export const routes: Routes = [
  { path: '', component: HomePageComponent }, // = page home
  { path: 'pattern-list', component: PatternListComponent },
];
