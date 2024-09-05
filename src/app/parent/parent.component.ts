import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public ap:string="";
  public bp:string="";
  
  @Output() public bEvent: EventEmitter<number> = new EventEmitter();
  catch(value:string){
    this.bp = value
  }
}
