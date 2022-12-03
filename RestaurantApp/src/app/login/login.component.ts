import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor(private formBUilder: FormBuilder,private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.formBUilder.group({
    email: [''],
    password: ['']
    })
  }
  //login method 
  loginIn(){
  this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
   const user = res.find((a:any)=>{
    return a.email ===this.loginForm.value.email && a.password === this.loginForm.value.password
   })
   if(user){
    alert("Login Sucessfull")
    this.loginForm.reset();
    this.router.navigate(['home'])
   }else{
    alert("User not Found ...")
   }
  },err=>{
    alert("Something went wrong....")
    console.log(err);
  })
  }

}
