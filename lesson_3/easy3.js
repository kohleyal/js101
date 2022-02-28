// write 3 ways to remove all elements
let numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);
numbers = [1, 2, 3, 4];
numbers.splice(0,numbers.length);
console.log(numbers);
numbers = [1, 2, 3, 4];
while (numbers.length) numbers.pop();
console.log(numbers);

//console.log([1, 2, 3] + [4, 5]); will convert both to strings and then add
//arrays are objects in js, no primative array type, no plus method for adding

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1, str2);
//will output 'hello there' because str1 is a primative type and when they are
//assinged with another variable they are copied.

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
//the index 0 obj will be changed in both. slice will copy
//the values of primatives but will copie the refence for objects

/*The following function unnecessarily uses two return statements to return
boolean values. Can you rewrite this function so
it only has one return statement and does not explicitly
use either true or false? */
function isColorValid(color) {
  return (color === "blue" || color === "green");
}
isColorValid('blue');
