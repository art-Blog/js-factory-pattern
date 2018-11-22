var Calculator = require("./Calculator2.js");
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
