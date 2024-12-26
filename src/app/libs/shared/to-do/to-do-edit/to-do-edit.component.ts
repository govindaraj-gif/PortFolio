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
  key = 'toDoList';
  @ViewChild('item') item !: ElementRef;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialogRef<ToDoEditComponent>){
    
  }

  ngOnInit(): void {
      this.row = this.data.row;
      const todoList = localStorage.getItem(this.key);
      if(todoList) {
        this.todoList = JSON.parse(todoList);
      }
  }

  close(){
    this.dialog.close();
  }

  save(){
    var value = this.item.nativeElement.value;
    if(value == '') return;

    const data = localStorage.getItem(this.key);
    if(data) {
      this.todoList = JSON.parse(data);

      this.todoList.map((v,i) => {
        if(i == this.data.i){
          v.item = value
        }
      })
    }
    localStorage.setItem(this.key,JSON.stringify(this.todoList));
    this.close()
  }
}
