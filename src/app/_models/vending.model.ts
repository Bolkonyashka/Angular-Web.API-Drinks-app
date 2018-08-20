import { DrinkItem } from './drink.item';

export class VendingModel{
    cash: number;
    blocked1: boolean;
    blocked2: boolean;
    blocked5: boolean;
    blocked10: boolean;
    selectedDrinks: DrinkItem[] = [];
    currentInput: number = 0;
    currentOutput: number = 0;
    currentPrice: number = 0;

    constructor(cCash: number, cBlock1: boolean, cBlock2: boolean, cBlock5: boolean,cBlock10: boolean) {
      this.cash = cCash;
      this.blocked1 = cBlock1;
      this.blocked2 = cBlock2;
      this.blocked5 = cBlock5;
      this.blocked10 = cBlock10;
    }
  }