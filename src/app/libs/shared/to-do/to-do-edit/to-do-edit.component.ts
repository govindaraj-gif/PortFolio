import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToDO } from '../to-do-list/data';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent implements OnInit {
  row : any;
  todoList!:ToDO[];
  @ViewChild('item') item !: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialogRef<ToDoEditComponent>){
    
  }

  ngOnInit(): void {
      this.row = this.data;
      const todoList = localStorage.getItem('toDoList');
      if(todoList) {
        this.todoList = JSON.parse(todoList);
      }
  }

  cancel(){
    this.dialog.close();
  }

  save(){
    const value = this.item.nativeElement.value;
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
}
