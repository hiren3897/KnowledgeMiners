import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import {Users} from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl,  FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users = new Users();
  email: String;
  password: String;
  timestamp: string = formatDate(new Date(),'yyyy-MM-dd hh:mm:ss','en');
  Setuser:string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/set_user";
  submitted = false;
  
  constructor(private router: Router, private http:HttpClient) {
    this.users.timestamp = this.timestamp;
   }

   registerForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    Pass: new FormControl('',[Validators.required,Validators.minLength(8)])
});
  ngOnInit(): void {
   
  }

  get f() { return this.registerForm.controls; }

  RegisterUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("Enter Valid Email and Password");
    }else { 
    this.http.post<Users>(this.Setuser, this.users).subscribe(Data => {
      localStorage.setItem('userID',JSON.stringify(Data));
      this.router.navigate((['User']));
    })
  } 
  }

}
