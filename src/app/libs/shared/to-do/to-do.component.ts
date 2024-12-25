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
  constructor(){}

  ngOnInit(){
    localStorage.setItem('toDoList',JSON.stringify(data));
    const todoList = localStorage.getItem('toDoList');
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
    const data = localStorage.getItem('toDoList');
    if(data) {
      this.todoList = JSON.parse(data);
    }
    this.todoList.push(todo);
    localStorage.setItem('toDoList',JSON.stringify(this.todoList));
  }

  // @HostListener('window:beforeunload',['$event'])
  // unloadScreen(event:BeforeUnloadEvent){
  //   event.returnValue = 'confirm to reload!'
  // }

}
