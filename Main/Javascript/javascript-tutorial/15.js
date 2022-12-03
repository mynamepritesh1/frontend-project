//important array method

const numbers =[4,5,6,7,8,9,0];
// function mult(number, index){
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }
// for(let i=0; i<numbers.length; i++){
    // mult(numbers[i], i)
// }

// numbers.forEach(mult);

numbers.forEach(function(number,index){
    console.log(index,number*3);
})

const users=[ 
    {
        firstName: "pritesh", age: 29
    },
    {firstName: "priyanka", age: 24}
]

//using for each
users.forEach(function(user){
    console.log(user.firstName, user.age);
})

 //using for of 
for(let user of users){
    console.log(user.age);
}

//using arrow function  
users.forEach((user, index)=>{
    console.log(user.firstName,index);
    
})