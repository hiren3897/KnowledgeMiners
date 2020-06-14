import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
githubUrlHiren:string = 'https://github.com/hiren3897';
linkedinUrlHiren:string = 'https://www.linkedin.com/in/hiren-rathod-176632117/';
githubUrl:string;
facebookUrl:string;
linkedinUrl:string;

  constructor() { }

  ngOnInit(): void {
  }

}
