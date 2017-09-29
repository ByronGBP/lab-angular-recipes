import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';

import { RecipesService } from './services/recipes.service';

import { IngredientComponent } from './components/ingredient/ingredient.component';

import { RecipePageComponent } from './page/recipe-page/recipe-page.component';

import { routes } from './routes/routes';
import { DishCardComponent } from './components/dish-card/dish-card.component'

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    RecipePageComponent,
    DishCardComponent,
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
