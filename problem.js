//console statements

// console.log("Hello world");
// console.warn("Hello World");
// console.error("Hello world");
// console.log(6+8);

// alert statements

// alert("HEllo world");

// document.write statements

// document.write("<h1>HEllo world frm javascript</h1>");

// variables
// 1). using var

// var a = 9;
// var a = "hello world"; 
// console.log("the value of a is ",a," this is good");

// 2). using let

// let a = "hello world";
// console.log(a);

// Operators in js

// var a = 12;
// var b = 6;
// var c = true;
// var d;
// var e = null;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(c);
// console.log(d);
// console.log(e);

// conditional statements

// var age = 9;
// if (age == 18)
//         console.log("age is ",age);
// else if (age < 18)
//         console.log("age is ",age);
// else
//         console.log("age is ",age);

// Loops

// while loop
// var i = 0;
// while (i<=10) 
// {
//     console.log(i);
//     i++;
    
// }

//for loops
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// var a = 12345;
// var rem;
// while (a>0) 
// {
//     rem = a % 10;
//     console.log(rem);
//     a = a/10;
   
// }

// var a = 12;
// if (a % 2 == 0) {
//     console.log("number is even");
// }
// else
//         console.log("number is odd");

//functions.....
// let a = 5;
// let b = 16;
// let sum = add();
// console.log(sum);
// function add() {
//     return a+b;
    
// }

// Data Structures 
// 1). ARRAYS 

// var array = [1,2,'rakshit',undefined,true,null];
// var arr = new Array(1,2,'rakshit',undefined,true,null)
// array[1] = "hello";
// console.log(array.length);
// console.log(array);
// console.log(arr);


//  print array elements
// var array = [1,2,'rakshit',undefined,true,null];
// var i = 0;
// while (i <= array.length) {
//     console.log(array[i]);
//     i++;
    
// }

// push , pop , shift , unshift

// let array = [1,];
// array.push("Hello");
// array.push("World");
// console.log(array)
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(3);
// console.log(array);

// indexOf() , lastindexOf()
// var array = [1,2,'rakshit',undefined,true,null,'rakshit'];
//  let index = array.lastIndexOf("rakshit");
//  console.log(index)

// sort() , reverse()
// var array = [1,2,'Rakshit',undefined,true,null,'rakshit'];
// array.sort();
// console.log(array);
// array.reverse();
// console.log(array);

// take a key element and define an array find key present in an array or not
// var key = true;
// var array = [1,2,'rakshit',undefined,true,null,'rakshit'];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == key) {
//         console.log(true);
//         break;
//     }
//     else
//         console.log(false);
    
// }

// var array1 = [1,2,'Rakshit',undefined,true,null,'rakshit'];
// var array2 = [5,6,'hello'];
// var array3 = array1.concat(array2);
// console.log(array3);

// console.log(array1.slice(1,4,1));
 
// STRINGS

// var str = "hello world";
// // console.log(str[1]);
// str = str.replace("world","word")
// console.log(str.toUpperCase());

// DATES

let d = new Date()
console.log(d.get);





