import { Component, OnInit } from '@angular/core';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { Socialusers } from '../Models/SocialUsers.model'  
import { SocialloginService } from '../social-login.service';  
import { Router, ActivatedRoute, Params } from '@angular/router';  
@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  
export class LoginComponent implements OnInit {  
  response: any;  
  EnteredEmail: String;
  EnteredPassword: String;
    socialusers=new Socialusers();  
  constructor(  
    public OAuth: AuthService,  
    private SocialloginService: SocialloginService,  
    private router: Router  
  ) { }  
  ngOnInit() {  
  }  
  public socialSignIn(socialProvider: string) {  
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialProvider, socialusers);  
      console.log(socialusers);  
      this.Savesresponse(socialusers);  
    });  
  }  
  Savesresponse(socialusers: Socialusers) {  
    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {  
      debugger;  
      console.log(res);  
      this.socialusers=res;  
      this.response = res.userDetail;  
      localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
      this.router.navigate([`/User`]);  
    })  
  } 
  LogInFunc() {
    if (this.EnteredEmail == 'User' && this.EnteredPassword == '1234')
    this.router.navigate((['User']));
    else
    this.router.navigate((['Admin']));
  } 
  GoToRegester() {
    this.router.navigate((['Register']));
  }
}
