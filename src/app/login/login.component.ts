import { Component, OnInit} from '@angular/core';    
import { Router } from '@angular/router';  
import { Users } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'

@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  
export class LoginComponent implements OnInit {  
  response: any;
  users = new Users();  
  EnteredEmail: String;
  EnteredPassword: String;
  submitted = false;
  Login:string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/login";
  getUSer: string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/get_user/1";
  constructor(  
    public OAuth: AuthService,  
    private router: Router,
    private http: HttpClient
  ) { }  
  ngOnInit() {    
    
  }  

  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    Pass: new FormControl('',[Validators.required,Validators.minLength(8)])
});
   
get f() { return this.LoginForm.controls; }

  LogInFunc() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }else {
      this.http.post(this.Login,this.users).subscribe(data => {
        this.OAuth.login().subscribe(() => {
          if(this.OAuth.isLoggedIn) {
            this.router.navigate((['User']));
          }else {
            alert("Please enter correct Email and Password");
          }
        })
        
      })
    }

   
  } 
  GoToRegester() {
    this.router.navigate((['Register']));
  }
}
