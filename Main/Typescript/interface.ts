interface User{
    name: string;
    age: number;
    id: Number;
    email: string;


}
let user: User ={name: "john" , age:15,id:1,email:"abc"};
interface Employee extends User{
    salary: number;

}
let empl: Employee={name: "john" ,id:1,email:"abc",salary:15000};
