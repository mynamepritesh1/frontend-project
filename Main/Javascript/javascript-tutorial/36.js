//arrow function function in function 

// function myfunction(power){
//     return function(number){
//         return number ** power 
//     }
// }

//above function is enqivalent to below arrow function 

const myfunction = power => number => number ** power
    


//cube
const cube = myfunction(3);
const ans = cube(3);
console.log(ans)

//square
const square = myfunction(2);
const ans2 = square(3);
console.log(ans2)