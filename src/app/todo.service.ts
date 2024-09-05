import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoData: any = []
  constructor() { }

  public todoSubject: BehaviorSubject<any> = new BehaviorSubject(this.todoData);

  setTodoSubject(data:any){
    this.todoData.push(data);
    this.todoSubject.next(this.todoData);
  }

  getTodoSubject(){
    return this.todoSubject;
  }
  // for view
  public viewSubject: BehaviorSubject<any> = new BehaviorSubject('');

  setViewSubject(data:any){
    this.viewSubject.next(data)
  }
  getViewSubject(){
    return this.viewSubject;
  }

  // for edit
  public editSubject: BehaviorSubject<any> = new BehaviorSubject('');
  setEditSubject(data:any){
    this.editSubject.next(data);
  }
  getEditSubject(){
    return this.editSubject;
  }
}
