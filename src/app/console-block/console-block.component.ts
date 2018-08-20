import { Component, OnInit } from '@angular/core';
import { VendingModel } from '../_models/vending.model';

@Component({
  selector: 'app-console-block',
  templateUrl: './console-block.component.html',
  styleUrls: ['./console-block.component.css']
})
export class ConsoleBlockComponent implements OnInit {
  vendingModel: VendingModel;

  constructor() { }

  ngOnInit() {
    this.vendingModel = new VendingModel(1000, false, true, false, false);
  }

  moneyInput(count: number) {
    this.vendingModel.currentInput += count;
  }

}
