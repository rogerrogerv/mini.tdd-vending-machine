//test
const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

//Global Setup
const machine = new VendingMachine();

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("should have an insertCoin method", () => {
    expect(machine.insertCoin).to.be.a("function");
  });

  it("should have a select row method", () => {
    expect(machine.pressButton).to.be.a("function");
  });

  it("NO row selected, it should save the row and print to console when row is selected", () => {
    machine.pressButton("A", 1);
    expect(machine.row).to.be.equal("A");
  });

  it("NO row selected, it should display an error for non valid selection", () => {
    machine.pressButton("E", 1);
    expect(machine.pressButton).to.be("invalid row letter");
  });

  it("NO column selected, it should save the column and print to console when column is selected", () => {
    machine.pressButton("A", 1);
    expect(machine.column).to.be.equal(1);
  });

  it("NO column selected, it should display an error for non valid selection", () => {
    machine.pressButton("A", 5);
    expect(machine.pressButton).to.be("invalid column letter");
  });
});

describe("Balance", () => {
  it("if it's zero, it should rise when coin is inserted", () => {
    machine.balance === 0;
  });
});
