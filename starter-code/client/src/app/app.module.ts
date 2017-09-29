import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';

import { RecipesService } from './services/recipes.service';

import { IngredientComponent } from './components/ingredient/ingredient.component';
import { DishComponent } from './components/dish/dish.component';

import { RecipePageComponent } from './page/recipe-page/recipe-page.component';

import { routes } from './routes/routes'

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    DishComponent,
    RecipePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
