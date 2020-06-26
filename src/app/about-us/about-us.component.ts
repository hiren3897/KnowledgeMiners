import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
githubUrlHiren:string = 'https://github.com/hiren3897';
linkedinUrlHiren:string = 'https://www.linkedin.com/in/hiren-rathod-176632117/';
facebookUrlHiren:string = 'https://www.facebook.com/profile.php?id=100003191825449';
githubUrlVatsalya:string = 'https://github.com/vatsnayak';
linkedinUrlVatsalya:string = 'https://www.linkedin.com/in/vts-nyk-104/';
facebookUrlVatsalya:string = 'https://www.facebook.com/vats.nayak/';
facebookUrlTilak:string = 'https://www.facebook.com/search/top/?q=tilak%20jethva';
githubUrlTilak:string = 'https://github.com/tilakjethva';
linkedinUrlTilak:string = 'https://www.linkedin.com/in/tilakjethva/';
linkedinUrl:string;
githubUrl:string;
facebookUrl:string;
  constructor() { }

  ngOnInit(): void {
  }

}
