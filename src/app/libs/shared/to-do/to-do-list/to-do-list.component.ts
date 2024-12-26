import { Component, Input, OnInit } from '@angular/core';
import { data, Status, statuses, ToDO } from './data';
import { ToDoEditComponent } from '../to-do-edit/to-do-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{
  statuses !: Status[];
  @Input() todoList !: ToDO[] ;
  key = 'toDoList';

  constructor(public dialog: MatDialog) {}

  openDialog(data:any) {
    this.dialog.open(ToDoEditComponent,{
      data:data,
      height:'25%',
      width:'60%'
    }).afterClosed().subscribe(() => {
      const data = localStorage.getItem(this.key);
      if(data) this.todoList = JSON.parse(data);
    });
  }
  
  ngOnInit(): void {
    this.statuses = statuses;
  }

  delete(row:ToDO,i:number){
    this.todoList = this.todoList.filter((_:ToDO , index:number) => index != i);
    localStorage.setItem(this.key,JSON.stringify(this.todoList));
  }

  edit(row:ToDO,i:number){
    this.openDialog({row ,i});
  }

}
