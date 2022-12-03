"use strict";
let lname;
lname = "pritesh";
let newName = lname.toUpperCase();
console.log(newName);
// let age: number;
// age =25;
// age ="25";
let fname;
fname = "pritesh";
console.log(fname);
// let emplist: string;
// let emplist =string[];
// let deplisst; Array<string>;
// emplist =["oritesh","ingale"];
let numlist;
numlist = [1, 2, 3, 4, 5];
let result = numlist.filter((num) => num > 2);
console.log(result);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
let c = 1 /* Color.blue */;
//double
let swapNumb;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNumb = swapNumber(20, 30);
// swapNumb[0];
// swapNumb[1];
console.log(swapNumb);
//
let department;
department = 'IT';
department = 10;
let Adds;
function add(num1, num2) {
    return num1 + num2;
}
Adds = add(10, 20);
console.log(Adds);
