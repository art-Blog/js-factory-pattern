function Calculator() { }

Calculator.prototype.Compute = function (a, b) {
    return this.Cal(a, b)
}

Calculator.factory = function (type) {
    let constr = type

    if (typeof Calculator[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " dosen't exist"
        }
    }

    if (typeof Calculator[constr].prototype.drive !== "function") {
        Calculator[constr].prototype = new Calculator()
    }

    return new Calculator[constr]()
}

Calculator.add = function () {
    this.Cal = function (a, b) {
        return a + b
    }
}

Calculator.sub = function () {
    this.Cal = function (a, b) {
        return a - b
    }
}

module.exports = Calculator