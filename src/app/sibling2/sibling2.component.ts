import { Component } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  public count:number =0;
  cartCount: number=0;
  constructor(private  _commonService:SiblingService){

    _commonService.getCount().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
    _commonService.getCartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}
