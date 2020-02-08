const skillsForFrontendEngineer = ["html", "css", "javascript", "react"];
// You can create array simply using [], it is also known as array literals;
// console.log(skillsForFrontendEngineer);
// console.log(typeof skillsForFrontendEngineer);

// you can also create array using new keyword in js
const skillsForFullStackDeveloper = new Array(
  "html",
  "css",
  "javascript",
  "react/angular",
  "node",
  "database(mongodb)"
);

// console.log(skillsForFullStackDeveloper);
// console.log(typeof skillsForFullStackDeveloper);

//You can create array with multiple data types also

// const dataTypesInJS = [1, 'Tushar', true, undefined, null, Symbol, {firstName:'Tushar', lastName: 'Mehrotra'}, new Date()];

// console.log(dataTypesInJS);

//Array Methods
let array;
array = [1, 5, 4, 9, 7, 25, 100, 75];

//Check length of array
console.log(array.length);

//Check if array
console.log(Array.isArray(array));

//Get a value from array
console.log(array[4]);

//insert or replace something in array
array[0] = 6;

//indexof method

// console.log(array.indexOf(5));

//push method -> add something to the last

// array.push(500);

//unshift method -> add something in the beginning

// array.unshift(200);

//pop method ->remove something from end
// array.pop();

//shift method -> remove something from start
// array.shift();

//splice method -> remove a set of value
// array.splice(0, 2);

//reverse an array
// array.reverse();

//concatenate an array
const newArray = [210, 220, 230];
const val = array.concat(newArray); // doesn't exactly mutate the original array

//sort
const skills = ["html", "css", "javascript", "react", "angular"];
skills.sort();

//if you try to sort number's array
// it will sort it according to first value which is not right
array.sort();

//You need to use a compare function to sort numbers
array.sort(function(a, b) {
  return a - b;
});

//for sorting in descending order
array.sort(function(a, b) {
  return b - a;
});

//find method --> finds the first value that match the condition specified
function lessthan100(num) {
  return num < 100;
}

let number = array.find(lessthan100);

console.log(array);
console.log(number);

// console.log(val);
console.log(skills);
