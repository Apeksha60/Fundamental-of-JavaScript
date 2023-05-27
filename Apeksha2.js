
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