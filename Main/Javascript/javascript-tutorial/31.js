 //we wil simplyfy using new keyword yet we have
 // done this manually v=but new keyword will do this automatically
//new keyword
function createUser(firstName,lastName,age,email,address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
 
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

    
    const user1 = new createUser('pritesh', 'ingale', 29, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user2 =  new createUser('akash', 'ingale', 28, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user3 =new createUser('priyanka', 'ingale', 24, 'pritesh@gmail.com', 'abcd,cdf.trs');
    const user4 = new createUser('ashwini', 'ingale', 26, 'pritesh@gmail.com', 'abcd,cdf.trs');
console.log(user1);

console.log(user1.is18());

console.log(user1.about());
    

    