import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    this.login.login();
  }

  handleLogout()
  {
    this.login.logout();
  }

}
