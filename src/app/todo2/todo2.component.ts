import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {
  public todoData: any = []

  constructor(private todoService:TodoService){}
  ngOnInit(){
this.todoService.getTodoSubject().subscribe((data)=>{
   this.todoData=data
})
  }
  delete(index:number){
    this.todoData.splice(index,1);
  }
  view(index:number){
    this.todoService.setViewSubject(this.todoData[index])
  }
  edit(index:number){
    this.todoService.setEditSubject(this.todoData[index])
  }
  
}
