//reduce method

const numbers =[1,2,3,4,5,6,7,8,9,11];

// aim: sum of all the numbers in Array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;

});
//accumulator , currentValue

console.log("sum is", sum);


const userCart =[
    {productId: 1, productName: "smartphone" , price: 15000},
    {productId: 1, productName: "smartphone1" , price: 17000},
    {productId: 1, productName: "watch" , price: 14000},
    {productId: 1, productName: "tv" , price: 109000},
]
const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;

}, 0)

console.log("totalAmount is : ", totalAmount);