var Calculator = require("./Calculator2.js");
class ModuleFactory {
  static GetCalculator(type) {
    let constr = type;

    if (typeof Calculator[constr] !== "function") {
      throw new Error(constr + " dosen't exist");
    }

    if (typeof Calculator[constr].prototype.Compute !== "function") {
      Calculator[constr].prototype = new Calculator();
    }

    return new Calculator[constr]();
  }
}

module.exports = ModuleFactory;
