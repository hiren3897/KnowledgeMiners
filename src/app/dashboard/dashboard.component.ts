import { Component, OnInit, Output  } from '@angular/core';  
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';  
import { Socialusers } from '../Models/SocialUsers.model'  
import { SocialloginService } from '../social-login.service';  
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { RecommendationPanelComponent } from '../recommendation-panel/recommendation-panel.component';
import { strict } from 'assert';
import { exit } from 'process';
import { EventEmitter } from 'events';

const surveys = [{
  id: 1,
  questions: [{
    question: 'Which League of Age do you belong to?',
    options: [
      {age: "Digital Natives (18-25)"},
      {age: "Gen Y.1(25-29)"},
      {age: "Gen Y.2(29-39)"},
      {age: "Gen X(40-54)"},
      {age: "Baby Boomers(55-75)"},
    ],
    type: 'radio',
    image: 'https://lh5.googleusercontent.com/Ubqj8jGpZSJHL7CvDvgciFoDFc4yd8MmAgHVxst-1bTR6e1mCtHIMyWmbcMFSVU3fySAUjvSYs9n5_FzidwFT9kEY6vO_8AH0LeTQ_0pH9ZdhrVfxKrKMRiHXOhET_kKzZF_3lia3Ppy6XA',
  }, {
    question: 'You are…',
    options: [
      {sex: "Male"},
      {sex: "Female"},
      {sex: "Prefer not to say"},
    ],
    type: 'radio',
    image: 'https://lh5.googleusercontent.com/3LgzAN7aURZAYDh05afew9xZByEIcxh2WwfMrw3h4q6rsyxCqVh42XlxJUg-M1nVlW1Q9fr5oe-NWxpDAUCdQ6Dh0TrRHA8uMKv-nC6XDLNShljLxMFtPCMb2GdPKPDC0ICLRZXG191Z_aY',
  }, {
    question: 'Which region do you come from?',
    options: [
      {origin: "Indian subcontinent"},
      {origin: "Far East and South-East Asia"},
      {origin: "Middle East"},
      {origin: "North America"},
      {origin: "South America"},
      {origin: "Europe"},
      {origin: "Australia"},
      {origin: "Africa"},
    ],
    type: 'radio',
    image: 'https://lh3.googleusercontent.com/Y7y7M6Ugxqyj_cdI5TpdcNS7qrak5QQ0eVARewRo2XTyizbRV3WUic1GMGV9XASwgxaUycGNTIv3T1-SIe6ZahNG8eUtxIj5VZBd4eBKJtFtcWEGQdOreyirsHH0CX3vrVhUk44CoOuGYyo',
  }, {
    question: 'Your Profession..?',
    options: [
      {profession: "An office person"},
      {profession: "A medico"},
      {profession: "Student"},
      {profession: "An artist of a kind"},
      {profession: "A Teacher"},
      {profession: "Others"},
    ],
    type: 'radio',
    image: 'https://lh3.googleusercontent.com/Hd1y7_T5lVSPiz1DznTCYdZRgKUlE_8bauoHmt0IqNLKxup-yuMFzvBISEuLxEMRdj9nS_3Xr03Y1mGbvon74rGKorak9bKW49f-XyB9U4Ic1mgapPtBec6kzGOAX92zoihTLnTmnBaTPoY',
  }, {
    question: 'Your favorite weekend activities:',
    options: [
      {wkdact: "Outdoor and Sports"},
      {wkdact: "Netflix and Chill"},
      {wkdact: "House parties"},
      {wkdact: "Go Clubbing"},
      {wkdact: "Seek an Escape (Long Drive)"},
    ],
    type: 'radio',
    image: 'https://lh4.googleusercontent.com/V3EtUNBSZKe90utq-tgJbkU4oY0KkbE0JjlhsmJ3il865MR8Kv6Nll7JJ4u1RNEWjuQQKNgBllprdsXq6kX8rGRVI7tnuBpgxlV-GGiibRCVhhRKfzSYd3CTWihqXg3X9LjVlTe0t6sR-MM',
  }, {
    question: 'What do your taste buds say?',
    options: [
      {tastebud: "I have a major Sweet Tooth."},
      {tastebud: "Comfort/soul food for me."},
      {tastebud: "Bring on the butter! Fresh, Light & Healthy Fare."},
      {tastebud: "International cuisine — The spicier the better! Modern or Fusion."},
      {tastebud: "I like to try new, trendy spots."},
    ],
    type: 'radio',
    image: 'https://lh6.googleusercontent.com/gdQ3lVmVN-LzLXyquSmcBkh_XzrPHr7ITMGqJmx26A2vGXWPBSaMTsB3_DegqivFf4ctddzES8NRxmDQVY2Gk2tGWghvt_Yw33aGJ82VM2jEqvcMxBk4S4iXSxB8J19P1Q3v3i9vN2YV55c',
  }, {
    question: 'Your vacations be like',
    options: [
      {vacation: "Historical Cities and Charming European Villages"},
      {vacation: "Hike in the Mountains."},
      {vacation: "Exotic Beaches"},
      {vacation: "Into the Wild (Jungles)"},
    ],
    type: 'radio',
    image: 'https://lh4.googleusercontent.com/kXDXjPqsCoZsmpc9XF16d9Gjq6njqUU_5tygJKtQxtDzCmc1Gvw2Ieaoh-mZKxNFLK4Bvz96_KAVPloe3yU5YK5StuaJ3GUUI3Bsfstgb5kvs7zF--9PnzLe8Uj6YSpSOL2OdCK-cWFVS94',
  }, {
    question: 'What attracts you the most to purchase a certain perfume at your first instinct?',
    options: [
      {instinct: "Advert"},
      {instinct: "Packaging"},
      {instinct: "Brand"},
      {instinct: "Odor"},
    ],
    type: 'radio',
    image: 'https://lh4.googleusercontent.com/gFAe3GMI1NaVEhkvykJ4Hybm-h11zjvx2bY5-ju6t0FDpqnFM3YREAVopmutRPWYx1QCZxKYZo0XgPYXEorIwdkjhpJFdKMKg9Hcu2vykS1NpMsCE8q-J9pBl1mNVnkuMC9nhi8k4ZBkGlw',
  }]
}]

@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.css'],
  providers: [RecommendationPanelComponent] 
})  
export class DashboardComponent implements OnInit { 
  @Output() messageEvent = new EventEmitter();
  responses: string[] = [];
  favoriteSeason:string;
  private headers = new Headers({'Content-Type': 'application/json'});
  json_: string;
  posteddata: string;
  WebURL: string = "http://127.0.0.1:12345/predict";
  python: string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:5000/predict";
  AWSUrl:string = "http://ec2-100-26-219-28.compute-1.amazonaws.com:3000/set_recommendation";
  questions = surveys[0].questions;
  socialusers = new Socialusers();  
  constructor(public OAuth: AuthService,private router: Router, private http: HttpClient, private recommend: RecommendationPanelComponent) { }  
 
  ngOnInit() {  
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    console.log(this.socialusers.email);  
    console.log(this.messageEvent.emit(this.posteddata))
  }  
  logout() {  
   alert(1);    
    this.OAuth.signOut().then(data => {  
      debugger;  
      this.router.navigate([`/Login`]);  
    });  
  }  

  getvalues() {
    this.responses.push(this.favoriteSeason);
  }

 public Submit() {
    var UserResponses = Object.assign({}, ...this.responses);
    console.log(UserResponses);
    var headers: { "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", "Access-Control-Allow-Origin": "*"}
    this.http.post(this.python,UserResponses).subscribe(data => {  
      // this.posteddata = data as string;
    Object.entries(data).forEach(([key, value]) => {
        // console.log(key, value);
        this.posteddata = value;
        console.log(this.posteddata);
        Object.entries(this.recommend.categorys).forEach(([key, value]) => {
          if(value.type.includes(this.posteddata)) {

            this.router.navigate([`/result`]);
          }else {
            return exit;
          }
          }
       );
     });
    })
  }
}
