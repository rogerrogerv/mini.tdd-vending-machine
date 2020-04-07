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
    this.inventory = [["juice", "coffee"]];
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

  changeReturn() {}

  pressButton(button) {
    if (typeof button === "string") {
      this.row = button;
    } else if (typeof button === "number") {
      this.column = button;
    }
  }
}

module.exports = VendingMachine;
