let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers, numbers[4]);
//will return undefined but index 4 does not have a value
// the length property is changed to 7 for nubmers.
numbers[5] = undefined;
console.log(numbers.map((num) => 5 * num));
//the empty slots are not treated like undefined.

let str1 = 'Come over here!';
console.log(str1.endsWith('!'));

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//determine if obj contains entrie for Spot.
console.log(ages.hasOwnProperty('Spot'));

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// capitilize the first letter and lowercase the rest.
// => The munsters are creepy and spooky.
let lowMunsers = munstersDescription.charAt(0).toUpperCase();
lowMunsers += munstersDescription.slice(1).toLowerCase();
console.log(lowMunsers);

//Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

// check whether the name Dino appears.
str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

//add pet 'Dino" to the array
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

//How can we add multiple items to our array? ('Dino' and 'Hoppy')
// add multiple items to the push statement.
flintstones.push('Dino2', 'Zuko', 'Charley');
console.log(flintstones);

//return sentance just before work house
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.slice(0, advice.indexOf('house'));
console.log(advice);