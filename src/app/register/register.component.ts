import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import {Users} from '../Models/user.model';
import { HttpClient } from '@angular/common/http';

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
  
  constructor(private router: Router, private http:HttpClient) {
    this.users.timestamp = this.timestamp;
   }

  ngOnInit(): void {
    
  }

  RegisterUser() {
    this.http.post(this.Setuser, this.users).subscribe(Data => {
      this.router.navigate((['login']));
    })
      
  }

}
