
import { Ingredient } from './ingredient'

export class Dish {

  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[] = [];

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
