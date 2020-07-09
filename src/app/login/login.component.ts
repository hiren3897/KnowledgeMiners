import { Component, OnInit} from '@angular/core';    
import { Router, NavigationExtras } from '@angular/router';  
import { Users } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
  getUSer: string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/get_user/";
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
      alert("Please enter correct Email and Password");
    }else {
      this.router.navigate((['User'])); 
      this.http.post(this.Login,this.users).subscribe(res => {
        var isExists = false;
        Object.entries(res).forEach(([key, value]) => {
          console.log(value.users_id)
          if(value.users_id){
            isExists = true;
            this.OAuth.login().subscribe(() => {
              if(this.OAuth.isLoggedIn) {
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    special: JSON.stringify(value.users_id)
                  }
                };
                this.router.navigate(['User'],navigationExtras); 
              }
            })
          }else {
            alert("User Not Found!!");
          }
        })
        if (!isExists) {
          alert("User Not Found!!");
        }
        
        
      })
    }

   
  } 
  GoToRegester() {
    this.router.navigate((['Register']));
  }
}
