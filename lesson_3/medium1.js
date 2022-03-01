//function outputs sentence 10 time 1 more space to the right each time
let leftSpacerPrint = printSentance => {
  for (let index = 0; index < 10; index++) {
    console.log(printSentance.padStart(index + printSentance.length));
  }
};
leftSpacerPrint('The Flintstones Rock!');

//swap the case of all letters in the string.
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription = munstersDescription.split("");
munstersDescription.forEach((character, charIndex) => {
  let charcode = character.charCodeAt(0);
  if (charcode >= 65 && charcode <= 90) {
    munstersDescription[charIndex] = character.toLowerCase();
  } else if (charcode >= 97 && charcode <= 122) {
    munstersDescription[charIndex] = character.toUpperCase();
  }
});
munstersDescription = munstersDescription.join("");
console.log(munstersDescription);
//they did split(''), then map w/ if (char === char.toUpperCase()) .toLowerCase
// else .toUpperCase

// how to not have ti be a do while loop. Launch School question wording poor
// for this one. they are looking for just a while loop but asking for not
// a do while makes it feel implied that you shouldn't use a while.
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(20));

// 4. push vs concat. One creates a new array every time and the other
// modifies the exsiting array.

//5. 0.8999repeating and false. floating points make math harder

//6. it will print out false. Each NaN is unique. you can test for
// NaN with the Static method Number.isNaN()

//7. output is 34. anser is not modified when pass into a function as a param

//8. the data is messed up. the values in the object are objects themselves
// so they are passed by reference. the objects are then modified which will
// change the orginal object.

//9. it returns paper.

//10. it returns no. foo = yes and bar arg yes = no.