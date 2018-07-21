'use strict';

const calculator = require('./calc');
/** include string utility */
const stringUtil = require()

console.log(`Calc add 5 8: ${calculator.add(5, 8)}`);
console.log(`Calc add 2 8: ${calculator.add(2, 8)}`);

console.log(`Calc multiply 3 7: ${calculator.multiply(3, 7)}`);
console.log(`Calc multiply 2 8: ${calculator.multiply(2, 8)}`);
console.log(`Calc subtract 8 2: ${calculator.subtract(8, 2)}`);
console.log(`Calc divide 8 2: ${calculator.divide(8, 2)}`);

console.log(`Calc aggregate: 1, 4, 6, 2: ${calculator.aggregate([1, 4, 6, 2])}`);
console.log(`Calc aggregate: 1, 4, 2, 2: ${calculator.aggregate([1, 4, 2, 2])}`);


/** string utlis */
const str1 = 'AABBCC 1';
const str2 = 'DDEEFF 2';
console.log(`String Util add: ${stringUtil.add(str1, str2)}`);
const cleanStr = stringUtil.remove(str1, 'A');
console.log(`String Util remove A from ${str1}: ${cleanStr}`);
console.log(`String Util remove B from ${str1}: ${stringUtil.remove(str1, 'B')}`);

const everyOtherChar = stringUtil.everyOtherChar(str1);
console.log(`String Util every other char from ${str1}: ${everyOtherChar}`);
console.log(`String Util every other char from ${str2}: ${stringUtil.everyOtherChar(str2)}`);


