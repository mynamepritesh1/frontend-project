interface Address{
    street: string;
    city: string;
    state:  string;
    pin: number
}
class Employee{
    #id!: number;
    name!: string;
    address:Address;

    get emId(): number{
        return this.#id;
    }
    set emId(id: number){
        this.#id =id;
    }

    constructor(id: number, name:string,address:Address){
        this.#id =id;
        this.name =name;
        this.address =address;
        
   }
getNameWithAddres(): string{
    return `${this.name} stays at ${this.address}`;
}
}

let emp =new Employee(1,"pritesh",{street:"abc",city:"banglore",state:"karnatka",pin:123456});
let address = emp.getNameWithAddres();

console.log(emp);
console.log(address);

//