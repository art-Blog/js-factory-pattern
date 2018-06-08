var mocha = require('mocha')
var chai = require('chai')
var Calculator = require('../src/Calculator.js')
chai.should()


describe('Calculator', () => {
    let dataSet = [
        { args: { a: 3, b: 5 }, operator: 'add', expected: 8 },
        { args: { a: 3, b: 5 }, operator: 'sub', expected: -2 },
        { args: { a: 3, b: 5 }, operator: 'mul', expected: 15 },
        { args: { a: 3, b: 5 }, operator: 'div', expected: 0.6 },
    ]
    dataSet.forEach(data => {
        it(`${data.operator} ${data.args.a} and ${data.args.b} should equal ${data.expected}`, () => {
            let instance = Calculator.factory(data.operator)
            let actual = instance.Compute(data.args.a, data.args.b)
            actual.should.be.equal(data.expected)
        });
    })
});