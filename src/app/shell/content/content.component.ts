import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(private router:Router){

  }

  sudoko(){
    this.router.navigateByUrl('sudoko');
  }

  scanner(){
    this.router.navigateByUrl('pdf-scanner');
  }

  toDo(){
    this.router.navigateByUrl('to-do');
  }
}
