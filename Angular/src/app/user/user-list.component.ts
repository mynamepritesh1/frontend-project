// import { Conditional } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import{UserDataService} from '../user-data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  title ="blog";
  name="pritesh ingale"

  
  //event
  // myEvent(evt){
  //   console.log(evt);
  // }
// services used

  @Input() hero;
  Name=""
  constructor(private any:UserDataService) { 
       let data =this.any.getData();
       this.Name=data.name
  }

  ngOnInit(): void {
  }
//for event used this function
  myName = (evt) => console.warn(evt);
//text box value
   currentVal = "pritesh ingale"
  getVal(val){console.warn(val)
   this.currentVal = val;
  }

  // property binding
  disabledBox =true
  enableBox(){
     this.disabledBox =false;
  }

  // condition in Angular
  // make  if Conditiona
  show ="no";

  // switch case
  color = "pink";

  // loop in Angular
  data =[
    {
      name: 'pritesh' ,
      age: 31
    },
    {
      name: 'priyanka' ,
      age: 25
    },
    {
      name: 'Ashwini' ,
      age: 26
    },
    {
      name: 'Akash' ,
      age: 29
    }
  ]
  // Simple form in Angular
   getUserValue(value){
    console.log(value)
   }

   //style binding
   err=false;
   updatecolor(){
    this.color="blue"
   }
//pipe in Angular 

names="priyanka";
today= Date.now();
val =10;
slice ="hello"



   
}
