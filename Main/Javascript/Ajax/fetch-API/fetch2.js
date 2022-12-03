const URL = "https://jsonplaceholder.typicode.com/posts"


// fetch(URL)
// .then(response =>{
//     response.json()
// })
// .then(data =>{
//     console.log(data);
// })

//async await

// async function getPosts(){
//     const response = await fetch(URL);
//     if(response.ok){
//         throw new Error("Something went wrong ...!!!!")
//     }
//    const data = await response.json();
//    return data
// }
const getPosts = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong ...!!!!")
    }
   const data = await response.json();
   return data
}

getPosts()
.then((myData) => {
   console.log(myData);
    
})
.catch(error =>{
    console.log("inside-catch");
    console.log(error);
})