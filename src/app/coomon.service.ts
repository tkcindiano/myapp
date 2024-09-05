import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
//create subject
private countSubject:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }

  //set value
  setCount(value:number){
    // here,we are storing next value 
    this.countSubject.next(value);
  }
  //get value
  getCount(){
    return this.countSubject;
  }
