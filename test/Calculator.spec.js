var mocha = require('mocha')
var chai = require('chai')
var Calculator = require('../src/Calculator.js')
chai.should()


describe('Calculator', () => {
    it('#add()', () => {
        let expected = 8
        let instance = Calculator.factory('add')
        let actual = instance.Compute(3, 5)
        actual.should.be.equal(expected)
    });

});