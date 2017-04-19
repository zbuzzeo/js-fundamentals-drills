var expect = require('chai').expect;
var func   = require('../exercises.js');

describe('JS fundamental Drills', function(){
  it('#doubleArray is a function that takes in an array of numbers and returns a new array with each number doubled.', function(){
    var doubledArray = func.doubleArray([1,2,3]);
    expect(doubledArray).to.deep.equal([2,4,6])
  })
  it('#sumArrays is a function that takes in two arrays of numbers and returns the sum of the numbers of both arrays.', function(){
    var sum = func.sumArrays([1,2,3],[4,5,6]);
    expect(sum).to.deep.equal(21);

  })
  it('#stringCount is a function that takes in a string and returns the amount of letters in the string.', function() {
    var count = func.stringCount('abc');
    expect(count).to.deep.equal(3)
  })
  it('#arrayLength is a function that takes in an array and returns the length of the array. ', function() {

  })
  it('#countAll is a function that takes in an array of numbers and returns the sum of all numbers in the array.', function() {

  })
  it('#countStrings is a function that takes in an array of strings and returns an array containing each of the lenghts of the strings.', function() {

  })
  it('#countAllStrings is a function that takes in an array of strings and returns the sum of the length of all characters.', function() {

  })
  it('#convertToArray is a function that takes in an object and returns an array of values in the object.', function() {

  })
  it('#objectSize is a function that takes in an object and returns the amount of key value pairs in the object.', function() {

  })
  it('#createZeroFilledArray is a function that takes in a number and returns an array with the length of that number filled with zeroes.', function() {

  })
  it('#poppedArray is a function that takes in a an array of numbers and returns a new array without the last element of the array.', function() {


  })
  it('#arraySplit is a function that takes in a string and returns an array with each characater as a value of the array.', function() {

  })
  it('#lengthOfLast is a function that takes in an array of strings and returns thelength of the last string in the array.', function() {

  })
  it('#sumBelowTen a function that takes in an array of numbers and returns the sum of all numbers below 10.', function() {

  })
  it('#moreThanTenLetters is a function that takes in an array of strings and returns the amount of elements that have greater than 10 letters. ', function() {

  })
  it('#multiplyAll is a function that takes in an array of numbers and returns the product of all elements.', function() {

  })
  it('#getKeys is a function that takes in an object and returns an array of key names in the object.', function() {

  })
  it('#sumAllPositive is a function that takes in an array of numbers and returns the sum of all non-negative numbers. ', function() {

  })
  it('#stringCountBelowThree is a function that takes in an array of strings and returns the amount of strings that have 3 characters or less. ', function() {

  })
  it('#countObjects is a function that takes in an array of objects and returns the amount of objects in the array. ', function() {

  })

  
  it('#getObjectKeys is a function that takes in an object and returns an array of all the object keys. ', function() {

  })
  it('#getObjectValues is a function that takes in an object and returns an array of all the object values. ', function() {

  })
  it('#makeObject is a function that takes in two arguments key & value and returns an object {key: value} ', function() {

  })
  it('#makeObjectReverse is a function that takes in two arguments value & key, and returns an object {key: value} ', function() {

  })
  it('#tupleToObject is a function that takes in a tuple and returns an object with the first array element as key and second as value. ', function() {

  })
  it('#tupleToObjectReverse is a function that takes in a tuple and returns an object second array element as key and first array element as the value. ', function() {

  })
  it('#stringToKeys is a function that takes in an array of strings and returns an object with all the strings as keys and values set to 0.', function() {

  })
  it('#getValues is a function that takes in an object and returns an array of all the objects values. ', function() {

  })
  it('#getKeys is a function that takes in an object and returns an array of all the objects keynames. ', function() {

  })
  it('#objectToArray is a function that takes in an object and returns an array of tuples of the objects key value pairs. ', function() {

  })
  it('#arrayToObject is a function that takes in an array and return an object of key value pairs in sequence of the array.  If there is an odd amount in the array, set the last element value to null. ', function() {

  })
  it('#arraysToObject is a function that takes in two arrays, the first array elements will be keys of an object and second array elements will be values of an object ', function() {

  })
  it('#objectsToTuples is a function that takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.', function() {

  })
  it('#mapArrayValues is a function that takes in an array and returns an object with keys of all values in the array and the values for the keys will be all set to true.', function() {

  })
  it('#mapStringCounts is a function that takes in an array of strings and returns an object with the keys of all strings in the array and value if the character count of the key is greater than or equal to 5 to true, and less than five to false. ', function() {

  })
  it('#arrayToObjectNums is a function that takes in an array of numbers and returns an object with keys of the numbers of the array and set each value in the object to true. ', function() {

  })
  it('#stringToKeys is a function that takes in a string and returns an object whos keys are each letter of the string and values are true. ', function() {

  })
  
  it('#charCountMap is a function that takes in an array of strings and returns an object whos keys are the value of the strings and value of each key set to the character count of the string. ', function() {

  })
  it('#frequencyMap is a function that takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.', function() {

  })
  it('#tupleToObject is Create a function that takes in an array of tuples and and returns an object who's key's are the first element of the tuples and values are second element of the tuples. ', function() {

  })

})
