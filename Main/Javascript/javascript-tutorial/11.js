// function

//function expresion  == just add const befor the function
//funtion declaration
function pritesh(){
    console.log("happy birthday.....")
}
pritesh();

function vany(){
  console.log(2*4)
}
vany()

function sum(numb1,numb2,numb3){
    return numb1 + numb2 + numb3;
};
const returnedValue = sum(1,8,3);
console.log(returnedValue)



//isEven

function isEven(numb){
    if(numb % 2 ===0){
        return numb % 2 ===0;
    }
    return false;
} 

console.log(isEven(5))

// find target
function findTarget(array,target){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target){
            return i;
        }
        
        
    }
    return -1;
}
const myArray = [1,2,3,45,7]
const ans =findTarget(myArray, 4)

console.log(ans)






