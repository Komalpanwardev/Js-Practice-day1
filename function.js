// question1
// Ek function banao jo "Hello World" print kare.
function msg(){
    console.log("hello world");
}
msg();

// Question2
// Do numbers lekar unka addition return karo.
function add(a,b){
    return a+b;
}
console.log(add(5,6));

// Question3
// Ek function banao jo number even hai ya odd bataye.
function check(num){
    if(num %2 === 0){
        return "Even";

    }else{
        return "Odd";
    }
}
console.log(check(56));
console.log(check(25896));
console.log(check(3));

// Question4
// Ek function banao jo kisi number ka square return kare.
function square(num){
    return num*num;
}
console.log(square(6));
console.log(square(256));

// Question5
// 3 numbers me se largest number return karo.
function largest(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else{
        return c;
    }
}
console.log(largest(5,8,9));
console.log(largest(7,8,12));

// Question6
// Ek function banao jo string reverse kare.
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("hello"));
console.log(reverse("javascript"));

// Question7
// String me vowels count karne wala function banao.
function countVowels(string){
    let count = 0;
    let vowels = "aeiou";
    for(let i = 0; i <string.length; i++){
        if(vowels.includes(string[i].toLowercase())){
            count++;
        }

    }
    return count;
}
console.log(countVoweles("javascript"));