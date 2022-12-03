let lname :  string;

lname = "pritesh";

let newName =lname.toUpperCase();
console.log(newName);

// let age: number;
// age =25;
// age ="25";
let fname:  string;
fname ="pritesh";

console.log(fname);

// let emplist: string;
// let emplist =string[];
// let deplisst; Array<string>;

// emplist =["oritesh","ingale"];

let numlist: Array<number>;
numlist =[1,2,3,4,5];

let result = numlist.filter((num)=>num>2);
console.log(result);
let sum = numlist.reduce((acc,num)=> acc+num);

console.log(sum);


//enum
const enum Color {
    red,
    blue,
    green
}

let c: Color = Color.blue;

//double

let swapNumb: [firstNumber:number,secondNumber:number];
function swapNumber(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapNumb = swapNumber(20,30);
// swapNumb[0];
// swapNumb[1];

console.log(swapNumb);

//
let department: any;
department ='IT';
department =10;

let Adds: [number,number]
function add(num1:number,num2:number):any{
    return num1+num2
}

Adds =add(10,20);
console.log(Adds);
