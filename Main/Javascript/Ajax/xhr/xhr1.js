//error handling

const URL = "https://jsonplaceholder.typicode.com/posts";

 const xhr = new XMLHttpRequest();

 xhr.open("GET",URL);
 xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        // console.log(data);
        const id = data[3]
        console.log(id)  
    }else{
        console.log("Something went wrong....!!!!!")

    }
   
 }

xhr.onerror =() =>{
    console.log("Your internet is disconected")
}
 xhr.send();
