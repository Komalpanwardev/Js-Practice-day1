// Question1
// 2 numbers ka addition karo.
let a = 10;
let b = 15;
console.log(a+b);

// Question2
// 2 numbers ka subtraction karo
console.log(a-b);

// question3
// Multiplication karo.
console.log(a*b);

// Question4
console.log(a/b);

// Question5
// Modulus find karo.
console.log(a%b);

// Question6
// Check karo number even hai ya odd.
let num = 10;
if(num % 2 === 0 ){
    console.log("even Number");
}else{
    console.log("Odd number");
}

// Question7
// Check karo number positive hai ya negative.
let mynum = -85;
if(mynum >0){
    console.log("Positive Number");
} else if(mynum <0){
    console.log("Negative Number");
} else{
    console.log("zero");
}

// Question8
// Compare karo kaunsa number bada hai.
let a1 = 25;
let b1 = 108;
if(a1 > b1){
    console.log("A is greater");
}else{
    console.log("B is Greater");
}

// question9
// Check karo number 10 se bada hai ya nahi.
let num1 = 2;
if(num1>10){
    console.log("Number is greater than 10");
}else{
    console.log("Number is not greater than 10");
}

// Question10
// Check karo age 18+ hai ya nahi.
let age = 14;
if(age>18){
    console.log("Age is greater than 18");
}else{
    console.log("Age is not greater than 18");
}

// Question11
// Check karo user eligible hai voting ke liye ya nahi.
let age2 = 14;
if(age2>=18){
    console.log("eligible for voting");

}else{
    console.log("Not eligible for voting");
}

// Question12
// == aur === ka difference practical me dikhao.
let comp1 = 5;
let comp2 = "5";
console.log(comp1 == comp2);
console.log(comp1 === comp2);