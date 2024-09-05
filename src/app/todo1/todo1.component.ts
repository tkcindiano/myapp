import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {
  public todoData:FormGroup=new FormGroup({
    textData:new FormControl(''),
    dateData:new FormControl('')
  }); 

  constructor(private todoService:TodoService){}
  ngOnInit(){
    this.todoService.getEditSubject().subscribe((data)=>{
      this.todoData.setValue({
        textData:data.textData,
        dateData:data.dateData
      })
      // this.todoData.value.textData=data.textData;
      // this.todoData.value.dateData=data.dateData;
    })
  }

  create(){
    this.todoService.setTodoSubject(this.todoData.value);
  }
reset(){
  this.todoData.reset()
}
}
