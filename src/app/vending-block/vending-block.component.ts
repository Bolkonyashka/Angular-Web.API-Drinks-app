import { Component, OnInit } from '@angular/core';
import { VendingModel } from '../_models/vending.model';
import { DrinkItem } from '../_models/drink.item';

@Component({
  selector: 'app-vending-block',
  templateUrl: './vending-block.component.html',
  styleUrls: ['./vending-block.component.css']
})
export class VendingBlockComponent implements OnInit {
  vendingModel: VendingModel;
  drinksArr: DrinkItem[] = [];

  constructor() { }

  ngOnInit() {
    this.vendingModel = new VendingModel(1000, false, true, false, false);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола", 180, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.drinksArr.push(drinkitem);
  }

  moneyInput(count: number) {
    this.vendingModel.currentInput += count;
  }

}
