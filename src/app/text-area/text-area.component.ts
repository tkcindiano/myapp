import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  public text:string="";
  public initialvalue:number=0;
  @Input() public maxlength:number=50;

  charcount(){
    if(this.initialvalue<=this.maxlength){
      this.initialvalue=this.text.length;
    }
  } 

}