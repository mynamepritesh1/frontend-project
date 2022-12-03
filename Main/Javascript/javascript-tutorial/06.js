//array distrucring

const myArray = ["a","b","c","d"]

let [myvar1,myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);
