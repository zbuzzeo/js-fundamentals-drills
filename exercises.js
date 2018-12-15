/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

var doubleArray = function ( numArray ) {
        var newArray = [  ];
        var doubledValue;
        for ( var i = 0; i < numArray.length; i++ ) {
                doubledValue = numArray[i] * 2;
                newArray.push( doubledValue );
                console.log ( newArray );

        }
        return newArray;

}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function ( array, array2 ) {
        // Given that both arrays are equal in length.
        var total = 0;
        for ( var i = 0; i < array.length; i++ ) {
                total += array[i];
                total += array2[i];

        }
        return total;

}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function ( str ) {
        return str.length;

}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function ( array ) {
        return array.length;

}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function ( array ) {
        var sum = 0;
        for ( var i = 0; i < array.length; i++ ) {
                sum += array[i];

        }
        return sum;

}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function ( array ) {
        var lengthArray = [  ];
        for ( var i = 0; i < array.length; i++ ) {
                lengthArray.push ( array[i].length );

        }
        return lengthArray;

}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function ( array ) {
        var sum = 0;
        for ( var i = 0; i < array.length; i++ ) {
                sum += array[i].length;

        }
        return sum;

}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function ( object ) {
        var valueArray = [  ];
        for ( key in object ) {
                // Key is each key in object and object[key] is each value in object.
                valueArray.push ( object[key] );

        }
        return valueArray;

}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function ( object ) {
        // we can use the Object.keys ( obj ) method to create an array with the object's keys.
        var keysArray = Object.keys ( object );
        return keysArray.length;

}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function ( number ) {
        var zeroesArray = [  ];
        for ( var i = 0; i < number; i++ ) {
                zeroesArray.push ( 0 );

        }
        return zeroesArray;

}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function ( array ) {
        array.pop ( );
        return array;

}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function ( str ) {
        var split = str.split ( '' );
        return split;

}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function ( array ) {
        var poppedElement = array.pop();
        return poppedElement.length;

}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function ( array ) {
        var sum = 0;
        for ( var i = 0; i < array.length; i++ ) {
                if ( array[i] < 10 ) {
                        sum += array[i];

                }

        }
        return sum;

}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function ( array ) {
        var qualifiedElements = 0;
        for ( var i = 0; i < array.length; i++ ) {
                var stringLength = array[i].length;
                if ( stringLength > 10 ) {
                        qualifiedElements++;

                }

        }
        return qualifiedElements;

}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function ( array ) {
        // product is not initially assigned 0 because it will make everything else equal 0.
        var product = 1;
        for ( var i = 0; i < array.length; i++ ) {
                product *= array[i];

        }
        return product;

}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function ( array ) {
        var sum = 0;
        for ( var i = 0; i < array.length; i++ ) {
                if ( array[i] >= 0 ) {
                        sum += array[i];

                }

        }
        return sum;

}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function ( array ) {
        var acceptableStrings = 0;
        for ( var i = 0; i < array.length; i++ ) {
                var stringLength = array[i].length;
                if ( stringLength <= 3 ) {
                        acceptableStrings++;

                }

        }
        return acceptableStrings;

}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function ( array ) {
        return array.length;

}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function ( object ) {
        var keysArray = Object.keys ( object );
        return keysArray;

}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function ( object ) {
        var valuesArray = Object.values ( object );
        return valuesArray;

}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function ( key, value ) {
        var newObject = {  };
        newObject[ key ] = value;
        return newObject;

}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function ( value, key ) {
        var newObject = {  };
        newObject[ key ] = value;
        return newObject;

}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function ( array ) {
        var newObject = {  };
        newObject [ array[0] ] = array[ 1 ];
        return newObject;

}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function ( array ) {
        // this isn't the cleanest way but i want to practice using the .reverse() method.
        var newObject = {  };
        var arrayReverse = array.reverse ( );
        newObject [ arrayReverse[0] ] = arrayReverse [1];
        return newObject;

}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                newObject [ array[i] ] = 0;

        }
        return newObject;

}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function ( object ) {
        var valuesArray = Object.values ( object );
        return valuesArray;

}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function ( object ) {
        var keysArray = Object.keys ( object );
        return keysArray;

}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function ( object ) {
        var arrayWithTuples = [  ];
        for ( i in object ) {
                var tempTuple = [  ];
                tempTuple.push ( i );
                tempTuple.push ( object[i] );
                arrayWithTuples.push ( tempTuple );

        }
        return arrayWithTuples;

}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                var currentElement = array[i];
                newObject [ currentElement ] = false;

        }
        return newObject;

}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function ( array, array2 ) {
        var newObject = {  };
        // Given that the arrays are equal in length.
        for ( var i = 0; i < array.length; i++ ) {
                var currentFirstArray = array[i];
                var currentSecondArray = array2[i];
                newObject [ currentFirstArray ] = currentSecondArray;

        }
        return newObject;

}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function ( object, object2 ) {
        var arrayWithTuplePairs = [  ];
        // Given that both objects contain the same amount of key-value pairs.
        function assignToTempTuple ( obj ) {
                for ( i in obj ) {
                var tempTuple = [  ];
                tempTuple.push ( i );
                tempTuple.push ( obj[i] );
                arrayWithTuplePairs.push ( tempTuple );

                }
                
        }
        assignToTempTuple ( object );
        assignToTempTuple ( object2 );
        return arrayWithTuplePairs;

}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                var currentElement = array[i];
                newObject [ currentElement ] = true;

        }
        return newObject;

}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                var currentArray = array[i];
                var countedCharacters = currentArray.length;
                if ( countedCharacters >= 5 ) {
                        newObject [ currentArray ] = true;

                } else if ( countedCharacters < 5 ) {
                        newObject [ currentArray ] = false;

                }

        }
        return newObject;

}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                var currentArrElem = array[i];
                newObject [ currentArrElem ] = true;

        }
        return newObject;

}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function ( string ) {
        var newObject = {  };
        for ( var i = 0; i < string.length; i++ ) {
                var currentLetter = string[i];
                newObject [ currentLetter ] = true;

        }
        return newObject;

}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function ( array ) {
        var newObject = {  };
        for ( var i = 0;  i < array.length; i++ ) {
                var getElement = array[i];
                var getStringLength = getElement.length;
                newObject [ getElement ] = getStringLength;

        }
        return newObject;

}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function( array ){
        var objectKeys = [  ];
        var occurrences = [  ];
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                if ( array[i] !== array[i-1] ) {
                        objectKeys.push ( array[i] );
                        occurrences.push ( 1 );

                } else {
                        occurrences [occurrences.length - 1]++;
                
                }

        }
        for ( var i = 0; i < objectKeys.length; i++ ) {
                newObject [objectKeys[i]] = occurrences[i];

        }
        return newObject;

}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function ( array ) {
        var newObject = {  };
        for ( var i = 0; i < array.length; i++ ) {
                var currentTuple = array[i];
                newObject [ currentTuple[0] ] = currentTuple[1];

        }
        return newObject;

}


module.exports = {
        doubleArray: doubleArray,
        sumArrays: sumArrays, 
        stringCount: stringCount,
        arrayLength: arrayLength,
        countAll: countAll,
        countStrings: countStrings,
        countAllStrings: countAllStrings,
        convertToArray: convertToArray,
        objectSize: objectSize,
        createZeroFilledArray: createZeroFilledArray,
        poppedArray: poppedArray,
        splitString: splitString,
        lengthOfLast: lengthOfLast,
        sumBelowTen: sumBelowTen,
        moreThanTenLetters: moreThanTenLetters,
        multiplyAll: multiplyAll,
        sumAllPositive: sumAllPositive,
        stringCountBelowThree: stringCountBelowThree,
        countObjects: countObjects,
        getObjectKeys: getObjectKeys,
        getObjectValues: getObjectValues,
        makeObject: makeObject,
        makeObjectReverse: makeObjectReverse,
        tupleToObject: tupleToObject,
        tupleToObjectReverse: tupleToObjectReverse,
        strToKeys: strToKeys ,
        getValues: getValues,
        getKeys: getKeys,
        objectToArray: objectToArray,
        arrayToObject: arrayToObject,
        arraysToObject: arraysToObject,
        objectsToTuples: objectsToTuples,
        mapArrayValues: mapArrayValues,
        mapStringCounts: mapStringCounts,
        arrayToObjectNums: arrayToObjectNums,
        stringToKeys: stringToKeys,
        charCountMap: charCountMap,
        frequencyMap: frequencyMap,
        tupleConvertToObject: tupleConvertToObject
      }
