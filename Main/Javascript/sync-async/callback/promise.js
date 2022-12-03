//promise
//promise is defined as fututure event 
//in callback function iusing promise we can remove nesting that
//we havew used in last programm 

//create promise
const bucket = ['coffee', 'chips' , 'vegetables' , 'salt' , 'rice'];
const friedRicePromise =  new Promise((resolve , reject)=>{
  if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
    resolve("Fired Rice");
  }else{
    reject("couldn't do it");
  }
})

//consume promise
friedRicePromise.then(
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}).catch(
    (error)=>{
    console.log(error);

})