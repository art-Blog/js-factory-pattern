class Calculator {
  Compute(num1, num2) {
    return this.Cal(num1, num2);
  }
}

Calculator.add = function() {
  this.Cal = function(num1, num2) {
    return num1 + num2;
  };
};
Calculator.sub = function() {
  this.Cal = function(num1, num2) {
    return num1 - num2;
  };
};
Calculator.mul = function() {
  this.Cal = function(num1, num2) {
    return num1 * num2;
  };
};
Calculator.div = function() {
  this.Cal = function(num1, num2) {
    return num1 / num2;
  };
};

module.exports = class ModuleFactory {
  static GetCalculator(type) {
    let constr = type;

    if (typeof Calculator[constr] !== "function") {
      throw {
        name: "Error",
        message: constr + " dosen't exist"
      };
    }

    if (typeof Calculator[constr].prototype.Compute !== "function") {
      Calculator[constr].prototype = new Calculator();
    }

    return new Calculator[constr]();
  }
};
