import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todo List';
  
  constructor(){
    // setTimeout(() => {
    //  this.title ="Welcome to Todo ";
    // }, 2000);
  }
}
