import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
       hotelName ='The Taj Hotel'

       numberOfRooms =10;
       hideRooms =false;
       rooms: Room={
        totalRooms: 20,
        availableRooms: 10,
        bookedRooms: 5,
       }
       name ="pritesh ingale";
  constructor() { }
  // function
getName(){
return this.name
}
//object
obj={
name:'priyanka',
age:24
}

//array
arr=['pritesh','priyanka','akash','ashwini']
;
  ngOnInit(): void {
  }
  toggle(){
    this.hideRooms =!this.hideRooms;
  }

}
