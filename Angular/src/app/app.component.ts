import { Component } from '@angular/core';
// import{UserDataService} from './user-data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>hello from first angular project</h1>', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  //i have transfer this data to user-list componant
  mynamee =
    {
      name: 'pritesh' ,
      age: 31,
      address:"mumbai",
    }
  //   {
  //     name: 'raju' ,
  //     age: 25,
  //     address:"mumbai",
  //   },
  //   {
  //     name: 'Anil' ,
  //     age: 26,
  //     address:"mumbai",
  //   },
  //   {
  //     name: 'sunil' ,
  //     age: 29,
  //     address:"mumbai",
  //   }
  // ]
  
}
