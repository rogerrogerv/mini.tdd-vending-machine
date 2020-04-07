// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

/* exported stringifyJSON */

class VendingMachine {
  constructor() {
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.balance = 0;
    this.row = null;
    this.column = null;
    this.inventory = [[juice, coffee]];
  }

  insertCoin(denomination) {
    this.till[denomination] += 1;
    this.balance += denomination;
  }

  changeReturn() {}

  selectRow(selectedRow) {
    if (
      selectedRow === "A" ||
      selectedRow === "B" ||
      selectedRow === "C" ||
      selectedRow === "D"
    ) {
      this.row = selectedRow;
    } else {
      return "invalid row letter";
    }
  }

  pressButton(selectedRow, selectedColumn) {
    if (this.row !== null) {
      this.selectRow(selectedRow);
    }

    if (
      selectedColumn === 1 ||
      selectedColumn === 2 ||
      selectedColumn === 3 ||
      selectedColumn === 4
    ) {
      this.column = selectedColumn;
    } else {
      return "invalid column number";
    }
  }
}

module.exports = VendingMachine;
