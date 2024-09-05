import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  private countSubject:BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  setCount(value:number){
    this.countSubject.next(value);
  }

  getCount(){
    return this.countSubject;
  }
  private cartCount=0;
  private cartCountSubject:BehaviorSubject<number>= new BehaviorSubject(this.cartCount);

  addToCart(){
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount)
  }
  getCartCount(){
    return this.cartCountSubject;
  }
}
