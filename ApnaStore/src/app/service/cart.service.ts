import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // localItem: string;
  // productList: product[]; 
   public cartItemList: any =[]
   public productList = new BehaviorSubject<any>([])
  constructor() {
    // this.cartItemList = localStorage.getItem("productList")
    // if(this.cartItemList == null){
    //   this.productList

    // }else{
    //   this.productList =JSON.parse(this.cartItemList)
    // }
  
   }
  //getters
  getproducts(){
   return this.productList.asObservable();
  }
  setProducts(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    localStorage.setItem("productList",JSON.stringify(this.productList));
    
  }
  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    localStorage.setItem("productList",JSON.stringify(this.productList));

    
  }
  getTotalPrice() : number{
  let grandTotal =0;
  this.cartItemList.map((a:any)=>{
    grandTotal+= a.total;
  })
  return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);

      }
      localStorage.setItem("productList",JSON.stringify(this.productList));


    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
    localStorage.setItem("productList",JSON.stringify(this.productList));


  }
}
