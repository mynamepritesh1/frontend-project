import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
// import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem: number=0;
  constructor(private cartServie: CartService) { }

  ngOnInit(): void {
    this.cartServie.getproducts()
    .subscribe(res=>{
     this.totalItem = res.length;    
    })
  }

}
