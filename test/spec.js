var expect = require('chai').expect;
var func   = require('../exercises.js');

describe('JS fundamental Drills', function(){
  it('#doubleArray should double the elements in an array', function(){
    var doubledArray = func.doubleArray([1,2,3]);
    expect(doubleArray).to.deepEqual([2,4,6])
  })
  it('#sumArrays should return the sum of all elements of both arrays', function(){
    var sum = func.sumArrays([1,2,3],[4,5,6]);
    expect(sum).to.deepEqual(16);

  })
})
