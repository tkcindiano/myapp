import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component {
  public text:string="";
  public date:string="";
     
  constructor(private todoService:TodoService){}
  ngOnInit(){
  this.todoService.getViewSubject().subscribe((data)=>{
    this.text=data.textData;
    this.date=data.dateData;
  })
  }
}
