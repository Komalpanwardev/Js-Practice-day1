// Real-Life Example of foor loop
// E-commerce cart products

let products = ["shoes", "Watch", "phone"];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// Multiplication Table
// Suppose user ne input diya:5
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num + "x" + i + "=" + num * i);
}

// Sum of Numbers //1 + 2 + 3 + 4 + 5
let sum = 0;
for (i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

// Do while loop
// Password attempt system
let attempts = 1;
while (attempts <= 3) {
  console.log("TryAgain");
  attempts++;
}

// do while loop
// Real-Life Example
// Game start at least once
let play = false;
do {
  console.log("Game Started");
} while (play);

// for ...of loop
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Real-Life Example
// Instagram followers list
let followers = ["rahul", "aman", "priya"];
for (let user of followers) {
  console.log(user);
}

// for...in loops
// Real-Life Example
// Instagram followers list

let user1 = {
  name: "Komal",
  age: 22,
  city: "Delhi",
};

for (let key in user1) {
  console.log(key, user1[key]);
}

// Real-Life Example
// User profile data
let profile = {
  username: "komal",
  followers: 5000,
  verified: true,
};
for (let key in profile) {
  console.log(key);
}

// Loop Questions
// Print 1 to 100
for (i = 1; i <= 100; i++) {
  console.log(i);
}

// Question2
// print even number in js.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// short method
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Question 3
// print odd number
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// short method
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// question 4
// sum of numbers
let sum1 = 0;
for (let i = 1; i <= 52; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

// Question 5
// multiplication table
let mynum = 5;
for (let i = 1; i <= 10; i++) {
  console.log(mynum + "x" + i + "=" + mynum * i);
}

// question6
// reverse Counting
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// question7
// factorial
let number = 10;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}

console.log(factorial);

// Question8
// count digit 
let number1 = 1234225525
let count = 0
while(number1>0){
    number1 = Math.floor(number1 /10)
    count++
}
console.log(count)