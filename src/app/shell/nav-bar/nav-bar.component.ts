import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(){}

  gitHub(){
    window.open('https://github.com/govindaraj-gif', '_blank')
  }

  instagram(){
    window.open('https://www.instagram.com/the_gopi/', '_blank')
  }

  linkedIn(){
    window.open('https://www.linkedin.com/in/govindaraj-ds/', '_blank')
  }

}

