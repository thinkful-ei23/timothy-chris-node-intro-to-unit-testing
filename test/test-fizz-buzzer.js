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
  });
});
