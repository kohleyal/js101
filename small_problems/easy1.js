// isn't it odd. write function that takes zero, pos, or neg int and tells
// if its' absolute value is odd.
const isOdd = number => {
  return number % 2 !== 0;
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//log all odds 1-99 inclusive to console. all separate lines.

// function odd99() {
//   for (let index = 1; index <= 99; index += 2) {
//     console.log(index);
//   }
// }
// odd99();

//even numbers. same as above but even
// function even99() {
//   for (let index = 2; index <= 99; index += 2) {
//     console.log(index);
//   }
// }
// even99();

//how big is the room ask user length and width meters logs area in m^2 and ft^2
/*
1 square meter == 10.7639 square feet.
let readlineSync = require("readline-sync");
const SQMETER_TO_SQAREA = 10.7639;

console.log("Enter the length of the room in meters: \n");
let length = parseInt(readlineSync.prompt(), 10);

console.log("Enter the width of the room in meters: \n");
let width = parseInt(readlineSync.prompt(), 10);

let meterArea = width * length;
*/

//eslint-disable-next-line max-len
//console.log(`The area of the room is ${length * width} meters or (${meterArea * SQMETER_TO_SQAREA} square feet).`);


//tip calculator
/*
let readlineSync = require("readline-sync");

console.log('Enter you bill amount: ');
let billAmount = parseFloat(readlineSync.prompt());

console.log('Enter your tip percentage: ');
let tipPercentage = parseFloat(readlineSync.prompt());

let tipAmount = (tipPercentage / 100) * billAmount;
*/
// eslint-disable-next-line max-len
//console.log(`The tip amount is ${tipAmount.toFixed(2)}\nThe total bill is ${(billAmount + tipAmount).toFixed(2)}`);


//sum or prod of consecutive integers. > 0 and ask for sum or prod of 1 to num
/*
let readlineSync = require("readline-sync");

console.log('Please enter an integer greater than 0: ');
let inputNumber = parseInt(readlineSync.prompt(), 10);

console.log('Enter \'s\' to compute sum, or \'p\' to compute the product: ');
let mathPath = readlineSync.prompt();

let outputTotal = 1;
for (let index = 2; index <= inputNumber; index++) {
  if (mathPath === "s") outputTotal += index;
  else outputTotal *= index;
}
console.log(outputTotal);
*/


//short long short. takes two strings in, outputs shortlongshort
//can assume the strings are different legths. writes function.

const shortLongShort = (string1, string2) => {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
};
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


//leap years part 1. function that returns if a year is a leap year.
//assume entered number is >0. true if it is leap year
//leap year is year divisible by 4 but not 100 unless 100 and 400.

let isLeapYear = (year) => {
  if (year % 4 !== 0) return false;
  else if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else return true;
};

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

//leap year part 2. britsh used julian calendar until 1752.
//every year divis by four before 1752 is leap year.
//update function.

isLeapYear = (year) => {
  if (year <= 1752 && year % 4 === 0) return true;
  else if (year % 4 !== 0) return false;
  else if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else return true;
};

//multiples of 3 and 5. sum of all 3 and 5 multiples
//between number and 1.

const multisum = (inputNum) => {
  let totalSum = 0;
  for (let index = 1; index <= inputNum; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      totalSum += index;
    }
  }
  return totalSum;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

//UTF-16 sting value.funct to determine and return utf-16 string
//vaule. sum of all utf-16 char values in a sting.

const utf16Value = string => {
  let characterArray = string.split("");
  return characterArray.reduce((prevValue, currentval) => {
    return prevValue + currentval.charCodeAt(0);
  },0);
};

console.log(utf16Value('Four score'));       // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));       // 97
console.log(utf16Value(''));