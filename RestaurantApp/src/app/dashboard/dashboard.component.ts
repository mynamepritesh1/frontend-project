 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup
  restaurantModelObj : RestaurantData = new RestaurantData
  allRestaurantData: any
  showAdd!:boolean;
  showbtn!: boolean;
// data: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAlldata()
  }
  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }
   //now subscribing our data which map by services
   addRestaurant(){
    this.restaurantModelObj.name =this.formValue.value.name;
    this.restaurantModelObj.email =this.formValue.value.email;
    this.restaurantModelObj.mobile=this.formValue.value.mobile;
    this.restaurantModelObj.address =this.formValue.value.address;
    this.restaurantModelObj.services =this.formValue.value.services;


    this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
      console.log(res);
      alert("Restaurant Records Added Successfull....");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAlldata();
    },
    err=>{
      alert("Something went wrong...")
      console.log(err);

    })
   }
   //getAll data
   getAlldata(){
    this.api.getRestaurant().subscribe(res=>{
      this.allRestaurantData =res;
    })
   }
   //delete records
  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert("Restaurant Records deleted successfully")
      console.log(res)
      this.getAlldata();//its refresh our data

    })

  }
  onEditResto(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.restaurantModelObj.id =data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);


  }
  updateResto(){
    this.restaurantModelObj.name =this.formValue.value.name;
    this.restaurantModelObj.email =this.formValue.value.email;
    this.restaurantModelObj.mobile=this.formValue.value.mobile;
    this.restaurantModelObj.address =this.formValue.value.address;
    this.restaurantModelObj.services =this.formValue.value.services;

    this.api.updateRestaurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
    alert("Restuarant Data Updated Successfully...")
    let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAlldata();
    })

  }

}
