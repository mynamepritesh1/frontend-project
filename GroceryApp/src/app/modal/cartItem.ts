import { Foods } from "./food";

export class CartItem{
    constructor( public food:Foods){
        // this.food = food;
        // this.price;
    }
    // food:Foods;
    quantity: number = 1;
    price: number = this.food.price;
    // get price(): number{
    //     return this.food.price*this.quantity;
    }
    

