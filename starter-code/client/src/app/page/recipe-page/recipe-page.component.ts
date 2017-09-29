import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish'

import { RecipesService } from '../../services/recipes.service'


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  dishes: Dish[];

  constructor(private recipesServie: RecipesService) {
    recipesServie.getDishes().subscribe((dish) => {
      this.dishes = dish;
    });
   }

  ngOnInit() {
  }

}
