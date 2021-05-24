import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.httpClient.get("https://localhost:44372/api/User").subscribe(response => {
      this.users = response;
    }, error => {
      console.log("Unable to fetch users:" + error);
    });
  }
  title = 'Dating-app-ui';
  users: any;
}
