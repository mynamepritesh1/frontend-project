"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(2, 4));
// function sub(num1:number,num2:number){
//     return num1 - num2
// }
// console.log(sub(19,9))
const sub = (num1, num2) => num1 - num2;
console.log(sub(19, 9));
//rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
//generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['1', 'b', 'c']);
console.log(concatResult);
console.log(concatString);
