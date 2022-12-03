//filter method

const numbers =[3,2,5,6,8,9,1];

const isEven=function(number){
    return number %2 === 0;

}
const evenNumbers = numbers.filter(isEven);

console.group(evenNumbers);

//using arrow function
// const numbers =[3,2,5,6,8,9,1];

const isOdd=function(number){
    return number %2 === 1;

}
const oddNumbers = numbers.filter(isOdd);

console.group(oddNumbers);


