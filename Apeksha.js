
let name = "optimus";
let year = 2023;
console.log("Hello! My name is "+ name);
console.log("I was created in "+ year);
//Hello! My name is optimus
//I was created in 2023

//creat variable
let name = "optimus";
let year = 2023;
name = "Niko";
console.log("Hello! My name is "+ name);
console.log("I was created in "+ year);
//Hello! My name is Niko
//I was created in 2023


//Creat constant variable value 
const fname = "ape";
let year = 2023;
console.log("Hello! My name is "+ fname);
console.log("I was created in "+ year);
//Hello! My name is ape
//I was created in 2023

//Find sum of 2 numbers
let fnum = 5;
let lnum = 10;
console.log(fnum+lnum);
//15

//Find Area and perimeter of circle
let r=7;
const pi=3.147;
perimeter = 2*pi*r;
area = pi*r*r;
console.log("Perimeter = " +perimeter);
console.log("Area = " +area);
//Perimeter = 44.058
//Area = 154.203

//Get input Value
let r = prompt("radius value");
const pi=3.14;
perimeter = 2*pi*r;
area = pi*r*r;
radius value
//615.44

//Get input values
typeof(num1) = string
typeof(num2) = string
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let sum = num1 + num2 ;
console.log("Sum =" + sum);
//Enter first number 5 
//Enter second number 15
//Sum =515

console.log("Apeksha");

// typeof operator
console.log(typeof(9));     //number
console.log(typeof("Apeksha"));     //string
console.log(typeof(0.1));       //number
console.log(typeof(true));      //boolean
console.log(typeof('9'));       //string

//Binary arithmetic operators
console.log(12+26);     //38
console.log(5+4.5);     //9.5
console.log(5-3);       //2
console.log(6-0.1);     //5.9
console.log(10*4);      //40
console.log(2*1.5);     //3
console.log(8/2);       //4
console.log(12/5);      //2.4
console.log(10%3);      //1
console.log(2**3);      //8

let a = 3;
let b = 2;
let c = a%b;
let d = a**b;
console.log(c);     //1
console.log(d);     //9

let a = prompt("Enter number: ");       //5
let b = prompt("Enter number: ");       //3
let c = a%b;
let d = a**b;
console.log(c);     //2
console.log(d);     //125

//Writing complex expressions
console.log(1+3*4-2);       //11
console.log(1+3)*(4-2);     //4 NaN
console.log((1+3)*(4-2));       //8

//Unary operators (+) , (-)
console.log(+7);        //7
console.log(-9);        //-9
console.log(-(100+5));      //-105

//Exercise
console.log("Hello,"+ "World");     //Hello,World
console.log((-1)*(-10)*(-20));      //-200
console.log(2*(4+5*(6+3)));     //98
console.log(36/3+4*3);      //24

//Functions
function remainder(num1,num2){
    return num1%num2;
}
console.log(remainder(20,6));       //2

//Advance Functions
function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function multiplication(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function remainder(num1,num2){
    return num1 % num2;
}
function exponentiation(num1,num2){
    return num1 ** num2;
}
console.log(add(20,6));     //26
console.log(sub(20,6));     //14
console.log(multiplication(20,6));      //120
console.log(divide(20,6));      //3.3333333333333335
console.log(remainder(20,6));       //2
console.log(exponentiation(20,6));      //64000000

//function
function printCapitals(city,country) {
    console.log(city + " is the capital of " + country);
}
printCapitals("Colombo","Sri Lanka");       //Colombo is the capital of Sri Lanka