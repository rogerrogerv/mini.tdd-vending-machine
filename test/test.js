//test
const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("The vending machine", () => {
  //Setup
  const machine = new VendingMachine();
  const initialBalance = 0;

  describe("it's functions:", () => {
    it("should have an insertCoin method", () => {
      expect(machine.insertCoin).to.be.a("function");
    });

    it("insertCoin should accept a coin and update the till accordingly", () => {
      machine.balance = 0;
      machine.insertCoin(10);
      machine.insertCoin(50);
      machine.insertCoin(100);
      machine.insertCoin(500);
      expect(machine._till[10]).to.equal(1);
      expect(machine._till[50]).to.equal(1);
      expect(machine._till[100]).to.equal(1);
      expect(machine._till[500]).to.equal(1);
      expect(machine.balance).to.equal(660);
    });

    it("should have a pressButton method", () => {
      expect(machine.pressButton).to.be.a("function");
    });

    it("it should save the row and return the row selected", () => {
      machine.pressButton("a");
      expect(machine.row).to.be.equal("A");
      machine.pressButton("C");
      expect(machine.row).to.be.equal("C");
    });

    it("it should display an error for non valid row selection", () => {
      const rowError = "invalid ROW choice (choose A - D)";
      machine.pressButton("a");
      machine.pressButton("h");
      expect(machine.error).to.equal(rowError);
    });

    it("it should save the column and print to console when column is selected", () => {
      machine.pressButton(1);
      expect(machine.column).to.be.equal(1);
      machine.pressButton(4);
      expect(machine.column).to.be.equal(4);
    });

    it("it should display an error for non valid column selection", () => {
      const columnError = "invalid COLUMN choice (choose 1 - 4)";
      machine.pressButton(8);
      expect(machine.error).to.equal(columnError);
    });

    it("should have a changeReturn method", () => {
      expect(machine.changeReturn).to.be.a("function");
    });

    it("it should return reset balance and display coins", () => {
      const newMachineD = new VendingMachine();
      newMachineD.insertCoin(500);
      newMachineD.insertCoin(100);
      expect(newMachineD.balance).to.equal(600);
      let change = newMachineD.changeReturn();
      expect(newMachineD._till[500]).to.equal(0);
      expect(newMachineD._till[100]).to.equal(0);
      expect(change).to.equal(2);
      expect(newMachineD.balance).to.equal(0);
    });
  });

  describe("given the balance is zero:", () => {
    it("the balance is zeroed", () => {
      machine.balance = 0;
      expect(machine.balance).to.equal(0);
      expect(machine.balance).to.equal(initialBalance);
    });

    describe("when a coin is inserted", () => {
      it("should raise the balance and store the coin", () => {
        const usedBalance = 1000;
        machine.balance = usedBalance;
        machine._till = {
          10: 0,
          50: 0,
          100: 0,
          500: 0,
        };
        machine.insertCoin(500);
        expect(machine.balance).to.be.greaterThan(usedBalance);
        expect(machine._till).to.deep.equal({
          10: 0,
          50: 0,
          100: 0,
          500: 1,
        });
        expect(machine.balance).to.equal(1500); // Use an ES6 getter
      });
    });
  });

  describe("new start, fresh machine:", () => {
    it("when a new machine is made, the balance should be zero", () => {
      const newMachineA = new VendingMachine();
      const newMachineB = new VendingMachine();
      const newMachineC = new VendingMachine();
      expect(newMachineA.balance).to.equal(initialBalance);
      expect(newMachineB.balance).to.equal(initialBalance);
      expect(newMachineC.balance).to.equal(initialBalance);
    });
  });
});
