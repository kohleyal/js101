//return new str that replaces every 'important' wiht 'urgent'
let advice = "Few things in life are as important important important as house training your pet dinosaur.";
let newAdvice = advice.replace(/important/g, 'urgent');
console.log(newAdvice);

let numbers = [5, 2, 4, 3, 1];
let copynum = numbers.slice();
let copynum2 = [...numbers];
numbers.sort();
console.log(numbers, copynum, copynum2);

//determine whether a given number is in an array
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1), numbers.includes(number2));