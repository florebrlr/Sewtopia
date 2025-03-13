import { Routes } from '@angular/router';
import { PatternListComponent } from '../pattern-list/pattern-list.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pattern-list', component: PatternListComponent },
];
