//variables
//JS is loosly types language

//var a=10; //Global Scope
//a='Divi';
//JS is also known as ECMA script org that specify the rules of java script
//ECAM6 --> 2015

//let b=20;//Block Scope

//const c=30;//constant variable Block Scoped

//Data types
//var num=10;         //Number Datatype
//var name='Divi';    //String Datatype
var isActive = true; //Boolean Datatype

// console.log(typeof(num));
// console.log(typeof(name));
// console.log(typeof(isActive));
// console.log(num);

//operators
//arithmatic operator
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// unery operators
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);
// console.log(!a);

//relational operator: result in true and false
a = 10;
b = "10";

// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);//compare value only
// console.log(a===b);//compare value as well datatype

// //conditional operator
// console.log(a<b?"hello":"bye");

//conditional statements
// if  if-else     if-elif-else    switch

// if(a){
//     console.log("if part")
// }
// else console.log("else part")

// //array
// var arr=[1,2,3,'hello',true];
// arr.push("bye");//add at last
// arr.unshift("hello");//add at first

// arr.pop();//dlt from end
// arr.shift();//dlt from start
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// console.log(arr[i]);

// //iterator over the array
// arr.forEach(element => {
//     console.log(element);
// });

// XML:clint <----data exchange----> server
// json :common way to transfer data over internet
// java script object notaion
// var JSObject={
//     id:123,
//     name:"abc",
//     age:30,
//     salary:50000,
// };
// console.log(JSObject);
// console.log(JSObject.name);

var data = [
  { name: "abc", age: 10 },
  { name: "pqr", age: 11 },
  { name: "xyz", age: 09 },
];

//template String
// data.forEach(element => {
//     console.log(`Name:${element.name} Age:${element.age}`);
// });

//taking input from user

// var x=prompt("enter first name");
// var y=prompt("enter last name");
// console.log(x+" "+y);

// var a="divyanshi";
// var b="varshney";
// console.log(a+" "+b);
// console.log(`${a} ${b}`);

//JS functions
// function sum(x,y){
//     return x+y ;
// }
// var res=sum (10,20);
// console.log(res);

//arrow function ECam 6 based
// var  sub=(x,y)=> x-y;
// console.log(sub(1000,10));

//java script dialog box
// alert("notification");
// prompt("input");
// confirm("are u sure?");

var a = eval(prompt("enter the first number:"));
var b = eval(prompt("enter the second number:"));

var sum = (a, b) => a + b;
var sub = (a, b) => a - b;

var choice = prompt("ENTER YOUR CHOICE \n1.Addition \n2.Subtraction ");

switch(choice) {
  case "1":
    console.log(`sum of ${a} and ${b} : ${sum(a, b)}`);
    document.write(`sum of ${a} and ${b} : ${sum(a, b)}<br>`);
    alert("sum of " + a + " and " + b + " : " + sum(a, b));
    break;
  case "2":
    console.log(`subtration of ${a} and ${b} : ${sub(a, b)}`);
    document.write(`subtration of ${a} and ${b} : ${sub(a, b)}`);
    alert("subtraction of " + a + " and " + b + " : " + sub(a, b));
    break;
}
