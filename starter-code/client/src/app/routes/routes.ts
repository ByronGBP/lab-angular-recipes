import { RouterModule, Routes } from "@angular/router";
import { RecipePageComponent } from '../page/recipe-page/recipe-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipePageComponent },
];
