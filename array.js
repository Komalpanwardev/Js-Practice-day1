// Question1
// Ek array banao jisme 5 fruits 
let arr= ["mango","apple","banana","lichi","grapes"];
console.log(arr);

// Question2
// Array ka first element print karo.
let fruits = ["apple","banana","mango"];

console.log(fruits[0]);

// Question3
// Array ka last element print karo.
let arr1 = ["mango", "lichi","banana"];
console.log(arr1[2]);

// Question4
// push() use karke new value add karo.
let value = [1,2,3,4];
value.push(6);
console.log(value);

// Question5
// pop() use karke last value remove karo.
let val = [1,2,3,4];
val.pop();
console.log(val);

// question6
let len = [1,2,3,4];
console.log(len.length);

// Question7
// Check karo "mango" array me exist karta hai ya nahi.
let check = ["mango","papaya","stabary"];
console.log(check.includes("mango"));

// Question8
// Array ko reverse karo.
let rev = [10,20,30];
console.log(rev.reverse());

// Question9
// Array ko ascending order me sort karo.
let order = [100,20,500,65];
console.log(order.sort());

// Question10
// slice() use karke middle elements nikalo.
let number = [10,20,30,40,50];
let ele = number.slice(1,4);
console.log(ele);

// Real world problem
// Problem: Find Duplicate Elements in an Array

// Write a JavaScript program that finds all duplicate elements from an array and returns them in a new array.

// solution 1 - Using Set
