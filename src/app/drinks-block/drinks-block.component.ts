import { Component, OnInit } from '@angular/core';
import { DrinkItem } from '../_models/drink.item'

@Component({
  selector: 'app-drinks-block',
  templateUrl: './drinks-block.component.html',
  styleUrls: ['./drinks-block.component.css']
})
export class DrinksBlockComponent implements OnInit {
  drinksArr: DrinkItem[] = [];

  constructor() { }

  ngOnInit() {
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола", 180, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
  }

}
