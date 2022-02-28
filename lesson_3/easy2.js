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

//show two ways to put 'Four score and' in front.
let famousWords = "seven years ago...";
let way1 = 'Four score and '.concat(famousWords);
let way2 = `Four score and ${famousWords}`;
console.log(way1,'\n', way2);

// make [1, 2, 3, 4, 5] into [1, 2, 4, 5] by removing index 2
let twoArray = [1, 2, 3, 4, 5];
twoArray.splice(2,1);
console.log(twoArray);

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones);
let flinstone1 = [].concat(...flintstones);
let flinstone2 = flintstones.flat();
console.log(flinstone1);
console.log(flinstone2);

//how to check if they are arrays
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers), Array.isArray(table));

//space above a fourty character wide table huh
let title = "Flintstone Family Members";
let sidePadding = (40 - title.length) / 2;
title = ' '.repeat(sidePadding) + title + ' '.repeat(sidePadding);
console.log(title);
//launchschool way
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);
console.log(title);

//write two one-line expressions to count the number of lower case t's
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let statement11 = (statement1.replaceAll(' ','').split("t").length) - 1;
statement2 = (statement2.replaceAll(' ','').split("t").length) - 1;
console.log(statement11);
console.log(statement2);
//launch split it up into an array of individual letters and filtered that.
let launchAnswer = statement1.split('').filter(char => char === 't').length;
console.log(launchAnswer);
