import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { data, ToDO } from './to-do-list/data';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  @ViewChild('todo') toDo !: ElementRef;
  todoList !: ToDO[];
  key = 'toDoList';
  constructor(){}

  ngOnInit(){
    localStorage.setItem(this.key,JSON.stringify(data));
    const todoList = localStorage.getItem(this.key);
    if(todoList) {
      this.todoList = JSON.parse(todoList);
    }
  }

  addData(){
    const value = this.toDo.nativeElement.value;
    if(value == '') return;
    const todo = {
      item:value,
      statusid:1
    }
    const data = localStorage.getItem(this.key);
    if(data) {
      this.todoList = JSON.parse(data);
      this.todoList.push(todo)
    }
    localStorage.setItem(this.key,JSON.stringify(this.todoList));
  }

  // @HostListener('window:beforeunload',['$event'])
  // unloadScreen(event:BeforeUnloadEvent){
  //   event.returnValue = 'confirm to reload!'
  // }

}
