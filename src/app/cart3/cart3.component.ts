import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart3',
  templateUrl: './cart3.component.html',
  styleUrls: ['./cart3.component.css']
})
export class Cart3Component{
  // constructor(private _cartService:CartService){}
  public count:number=0;
  
  constructor(private _cartService:CartService){

    _cartService.getCartCount().subscribe(
        (data:any)=>{
          this.count = data;
        }
    )
    _cartService.getCartCount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }

}