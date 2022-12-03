//new keywored

function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age)
}

 const user1 =  new createUser("pritesh" , 31);

 //new keyword does 3 job
 //1- create empty object.this ={}
 //2- return empty object
 //3- 

 console.log(user1)
