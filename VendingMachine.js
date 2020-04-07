// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

/* exported stringifyJSON */

class VendingMachine {
  constructor() {
    this._till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this._balance = 0;
    this._row = "";
    this._column = 0;
    this.error = "";

    const juice = { name: "Apple Juice", price: 200, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const tea = { name: "Green Tea", price: 350, count: 5 };
    const soda = { name: "Cola", price: 100, count: 7 };
    const regular = { name: "Water Water", price: 50, count: 4 };
    const mineral = { name: "Mineral Water", price: 250, count: 3 };
    const diet = { name: "Diet Water", price: 250, count: 2 };
    const energy = { name: "Extra Jolt", price: 350, count: 1 };
    const mint = { name: "Fresh Mint", price: 200, count: 4 };
    const gum = { name: "Bubble Gum", price: 150, count: 3 };
    const jelly = { name: "Berry Jelly", price: 100, count: 2 };
    const candy = { name: "Sticky Tart", price: 100, count: 1 };
    const biscuit = { name: "Sweet", price: 150, count: 4 };
    const chip = { name: "Salted Chips", price: 100, count: 3 };
    const cracker = { name: "Plain Cracker", price: 300, count: 2 };
    const cookie = { name: "Chocolate Cookie", price: 200, count: 1 };

    const inventory = [
      [juice, coffee, tea, soda],
      [regular, mineral, diet, energy],
      [mint, gum, jelly, candy],
      [biscuit, chip, cracker, cookie],
    ];
  }

  get balance() {
    return this._balance;
  }
  set balance(amount) {
    this._balance = amount;
  }

  get row() {
    return this._row;
  }
  set row(rowLetter) {
    const rowChoices = ["A", "B", "C", "D"];
    const rowError = "invalid ROW choice (choose A - D)";
    if (rowChoices.includes(rowLetter.toUpperCase())) {
      this._row = rowLetter.toUpperCase();
    } else {
      this.error = rowError;
    }
  }

  get column() {
    return this._column;
  }
  set column(columnNumber) {
    const columnChoices = [1, 2, 3, 4];
    const columnError = "invalid COLUMN choice (choose 1 - 4)";
    if (columnChoices.includes(columnNumber)) {
      this._column = columnNumber;
    } else {
      this.error = columnError;
    }
  }

  insertCoin(denomination) {
    this._till[denomination] += 1;
    this._balance += denomination;
  }

  changeReturn() {
    let returnedCoins = this._till;
    this._till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.balance = 0;
    return returnedCoins;
  }

  pressButton(button) {
    if (typeof button === "string") {
      this.row = button;
    } else if (typeof button === "number") {
      this.column = button;
    }
  }

  calculateBalance() {
    let total =
      this._till[10] * 10 +
      this._till[50] * 50 +
      this._till[100] * 100 +
      this._till[500] * 500;
    this.balance = total;
    return total;
  }

  dispenseProduct(row, column) {
    let product;
    let selectedRow;
    switch (row) {
      case "A":
        selectedRow = 0;
        break;
      case "B":
        selectedRow = 1;
        break;
      case "C":
        selectedRow = 3;
        break;
      case "D":
        selectedRow = 4;
        break;
    }
    product = this.inventory[selectedRow][column - 1].name;
    return product;
  }
}

module.exports = VendingMachine;
