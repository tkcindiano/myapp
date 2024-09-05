import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component {

  public count:number=0;
  public cartCount:number = 0;
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