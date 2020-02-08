// you can use simple if else to check condition
// Use it when you want to do something based on condition

const array = [];
//if you are getting an array from server you can
//first check if it is an array or not
//& then start working on it

if (Array.isArray(array)) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log("Array");
} else {
  console.log("Not an array");
}

//else if
//Below we just want to separate an array & create separate array according
//to datatype
// const mixedArray = [
//   "Frontend",
//   "Html",
//   5,
//   5,
//   "JS",
//   4,
//   "css",
//   5,
//   true,
//   false,
//   ["apple", "orange", "banana"]
// ];

// const numberArray = [];
// const boolean = [];
// const string = [];
// let subArray = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   if (typeof mixedArray[i] === "number") {
//     numberArray.push(mixedArray[i]);
//   } else if (typeof mixedArray[i] === "string") {
//     string.push(mixedArray[i]);
//   } else if (typeof mixedArray[i] === "boolean") {
//     boolean.push(mixedArray[i]);
//   } else {
//     subArray = mixedArray[i];
//   }
// }

// console.log(numberArray, string, boolean, subArray);

//comparison operator
// ==(value only), !=(value only), ===, !==, >==, <==, >=(value only), <=(value only)

let number = "500";
console.log(typeof number);
//In case of double equal it compare only value not types so if
//you assign '500' to const number it will work then too
if (number == 500) {
  console.log(true);
}

if (number == 500) {
  console.log(true);
}

if (number != 400) {
  console.log(false);
}

if (number >= 500) {
  console.log(true);
}

if (number <= 500) {
  console.log(true);
}

if (number < 500) {
  console.log(false);
} else {
  console.log(number);
}

if (number > 500) {
  console.log(false);
} else {
  console.log(number);
}

if (number === 500) {
  console.log(true);
} else {
  console.log(false);
}

if (1 == true) {
  console.log(true);
}

const obj1 = { name: "xyz" };
const obj2 = { name: "abc" };

if (obj1 === obj2) {
  console.log(true);
} else {
  console.log(false);
}

//Above condition return false because both have different reference

const obj3 = obj1;
if (obj3 === obj1) {
  console.log(true);
} else {
  console.log(false);
}

const a = new String("abc");

if (a == "abc") {
  console.log(true);
}

//because above a is converted to string & then compared

// When type conversion is involved in the comparison
//(i.e., non–strict comparison), JavaScript converts the types String, Number, Boolean, or Object operands as follows:

// When comparing a number and a string, the string is
//converted to a number value. JavaScript attempts to convert the string numeric literal to a Number type value. First, a mathematical value is derived from the string numeric literal. Next, this value is rounded to nearest Number type value.

// If one of the operands is Boolean, the Boolean operand is converted to 1
//if it is true and +0 if it is false.

// If an object is compared with a number or string, JavaScript attempts to return the default value for the object. Operators attempt to convert the object to a primitive value, a String or Number value, using the valueOf and toString methods of the objects. If this attempt to convert the object fails, a runtime error is generated.
// Note that an object is converted into a primitive if, and only if, its comparand is a primitive. If both operands are objects, they're compared as objects, and the equality test is true only if both refer the same object.

// Logical Operators

// &&, ||, !, if you have multiple condition you want to check

// Logical AND operation
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// Logical OR operation
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// The value produced by a && or || operator is not necessarily of type Boolean.
// The value produced will always be the value of one of the two operand expressions.

// Both && and || result in the value of (exactly) one of their operands:

// A && B returns the value A if A can be coerced into false; otherwise, it returns B.
// A || B returns the value A if A can be coerced into true; otherwise, it returns B.

"foo" && "bar"; // "bar"
"bar" && "foo"; // "foo"
"foo" && ""; // ""
"" && "foo"; // ""

"foo" || "bar"; // "foo"
"bar" || "foo"; // "bar"
"foo" || ""; // "foo"
"" || "foo"; // "foo"
