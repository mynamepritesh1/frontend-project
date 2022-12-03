import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // constructor(private http: HttpClient) {
  //   getDataa
  //  }

  getData(){
    return{
      name: 'PRITESH',
      age: 31,
     id :10,
    }
  }
}
