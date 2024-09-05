import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  setCount(count: number) {
    throw new Error('Method not implemented.');
  }


   
 

  private Count=0;
  private cartCountSubject:BehaviorSubject<number>=new BehaviorSubject(this.Count);
  constructor() { }

  addToCart(value:number){
    this.Count++;
    this.cartCountSubject.next(this.Count);
  }
  getCartCount(){
   return this.cartCountSubject;
  }
}
