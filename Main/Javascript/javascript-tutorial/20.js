//find method 

const myArray = [ "hello" , "cat", "dog" , "lion"]

// function islength3(string){
//     return string.length === 3;
// }


const ans = myArray.find((string)=>string.length===3)

console.log(ans);

const users = [
    {userId: 1, userName: "pritesh"},
    {userId: 3, userName: "ash"},

]
const myuser = users.find((user) => user.userId===1);
console.log(myuser)