//if want to create n numbers of methods and want to call them then it is became very hectic 
//so wec will use following proccess

const obj1 ={
    key1: "value1",
    key2: "value2"
}

const obj2 =Object.create(obj1)//this is create a relation betn obj1 and obj2

   obj2.key3= "value3"
// }

 console.log(obj2.key1) 
// o/p will get undefined then we will use the method that obj2 goes to obj1 and ask there that do you 
//have key1 if yes then it will call that 

