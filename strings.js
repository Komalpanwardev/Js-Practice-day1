// Question1
// Ek string "Hello World" banao aur console me print karo.
let str = "Hello World";
console.log(str);

// Question2
// "JavaScript" ki length print karo
let name = "javascript";
console.log(name.length);

// Question3
// "Komal" ka first character print karo.
let str1 ="komal";
console.log(str1[0]);

// Question4
// "hello" ko uppercase me convert karo.
let str0 = "hello";
console.log(str0.toUpperCase());

// question5
// "WELCOME" ko lowercase me convert karo.
let str2 = "WELCOME";
console.log(str2.toLowerCase());

// question6
// " JS " ke extra spaces remove karo.
let str3 = "    js   ";
console.log(str3.trim());

// question7
// "JavaScript" me se "Script" extract karo using slice().
let lang ="javascript";
console.log(lang.slice(4,10));

// Question8
// "I love Java" me "Java" ko "JS" se replace karo.
let string = "I Love Java";
let result = string.replace("Java","Js");
console.log(result);

// question9
// Check karo "Frontend Developer" me "Developer" present hai ya nahi.
let dev ="frontend developer";
console.log(dev.includes("developer"));

// Question10
// "apple,mango,banana" ko array me convert karo.
let fruit = "apple,mango,banana";
console.log(fruit.split(","));

// Quuestion11
// User ka name aur age template literal se print karo.
// My name is Komal and I am 22 years old
let myname = "komal";
let myage = 22;
console.log(`my name is ${myname} and i am ${myage} years old`);

// Question12
// "hello hello" me second "hello" ka index find karo.
let find = "hello hello";
let results = find.lastIndexOf("hello");
console.log(results);

// Question13
// "JavaScript" startsWith "Java" check karo.
let lang1 = "javascript";
console.log(lang1.startsWith("java"));

// Question14
// "Coding" ko 3 baar repeat karo
let code = "coding";
console.log(code.repeat(3));

// Question15
// "5" ko "005" me convert karo using padStart().
let num = "5";
console.log(num.padStart(3,"0"));
