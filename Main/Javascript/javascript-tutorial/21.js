// every.mewthod

const numbers = [0,2,3,5,6,8,9,1,2,5,87];

const mynumber = numbers.every((number) => number % 2==0)
// console.log(mynumber);

//some method

 const numb = [3,5,8,9];

//doen any number is even 
//true
const ans =  numb.some((num)=> num%2===0);
// console.log(ans)

 //fill method used for fill the array
  //value, start, end

  const myArray = [1,2,3,45,6,7,8,9];
  myArray.fill(5,2,5);
//   console.log(myArray)

//splice mthod(delete and insert method )
//start,delete,insert

const array = ['item1' , 'item2' , 'item3']

//delete
//array.splice(1,1);

//insert
//rray.splice(3,0,'item4')

// insert and delete
array.splice(2,1,'item5')

console.log(array);
