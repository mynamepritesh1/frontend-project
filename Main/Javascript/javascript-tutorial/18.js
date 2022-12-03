//ascii value    
//sort method

const numbers = [5,9,1200,410,900]

numbers.sort((a,b)=>a-b);
console.log(numbers);


const products = [
    {prodictId: 1, productName: "mobile", productPrice: 8900},
    {prodictId: 2, productName: "tv", productPrice:18900},
    {prodictId: 3, productName: "watch", productPrice: 5000},

    {prodictId: 4, productName: "mobile", productPrice: 68900},

    {prodictId: 5, productName: "mobile", productPrice: 89800},

]
products.sort((a,b)=>{
    return a.productPrice-b.productPrice
})
console.log(products);

 const hightolow = products.slice(0).sort((a,b)=>{
    return b.productPrice - a.productPrice;
 })
 console.log(hightolow)

 