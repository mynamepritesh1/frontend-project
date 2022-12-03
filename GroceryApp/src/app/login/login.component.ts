import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
 @Output()
 onClick = new EventEmitter();

  loginForm!:FormGroup;
  isSubmitted = false;
  returnUrl = ''; 

  constructor(private formBuilder: FormBuilder , private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    // alert(`email: ${this.fc.email.value},
    // password: ${this.fc.password.value}`);

    this.userService.login({email:this.fc.email.value,
    password: this.fc.password.value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }
  

}
