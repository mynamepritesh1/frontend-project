 //javascript function ===> funtion + object

  // if we want to create  n numbers of object so we cant able to wirte those object 
//so simply we create a function (and this functionj will create object)
//step
//1-add key value pair
//2- and it return the object

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
    
//     is18 :  function(){
//         return this.age >=18;
//     },
//     sing: function(){
//         return 'sare ga ma pa ma '
//     }
    

// }

function createUser(firstName,lastName,age,email,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing =userMethods.sing;
   
    return user;
    }

    createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old`;

    };

    createUser.prototype.is18 = function(){
        return this.age >=18;
    };

    createUser.prototype.sing = function(){
        return 'sare ga ma pa ma '
    }

    
    const user1 = createUser('pritesh', 'ingale', 29, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user2 = createUser('akash', 'ingale', 28, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user3 = createUser('priyanka', 'ingale', 24, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user4 = createUser('ashwini', 'ingale', 26, 'pritesh@gmail.com', 'abcd,cdf.trs');
console.log(user1);

console.log(user1.is18());

console.log(user1.about());
    

    