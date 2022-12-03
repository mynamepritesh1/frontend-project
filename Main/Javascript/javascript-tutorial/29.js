// if we want to create  n numbers of object so we cant able to wirte those object 
//so simply we create a function (and this functionj will create object)
//step
//1-add key value pair
//2- and it return the object

function createUser(firstName,lastName,age,email,address){
const user = {};
user.firstName = firstName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;

user.about =function(){
    return `${this.firstName} is ${this.age} years old`;
};

user.is18 = function(){
    return this.age >=18;
};

return user;
}

const user1 = createUser('pritesh', 'ingale', 29, 'pritesh@gmail.com', 'abcd,cdf.trs');
console.log(user1);

const is18= user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
