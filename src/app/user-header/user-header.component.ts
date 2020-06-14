import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  serverData: JSON;

  constructor(private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  Logout() {
    this.router.navigate((['login']));
  }

  getFragrance() {
    this.httpClient.get('http://127.0.0.1:12345/predict').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

}
