'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function (){
  it('should return fizz-buzz , buzz, fizz or num', function(){
    const normalCases = [
      {a: 30, b: 15 , expected: 'fizz-buzz'},
      {a: 10, b: 5, expected: 'buzz'},
      {a: 9, b: 3, expected: 'fizz'},
      {a: 11, b: 3, expected: 11}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function () {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function (input) {
      expect(function () {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});
