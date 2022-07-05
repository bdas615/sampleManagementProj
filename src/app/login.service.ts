import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isloggedin = false;

  login()
  {
    this.isloggedin = true;
  }

  logout()
  {
    this.isloggedin = false;
  }




}
