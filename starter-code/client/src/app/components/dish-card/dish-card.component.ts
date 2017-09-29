import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../models/dish'

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {

  @Input() dishes: Dish[];

  constructor() { }

  ngOnInit() {
  }

}
