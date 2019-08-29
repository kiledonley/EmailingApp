import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticated: boolean = false;
  constructor(private router: Router,
              private http: HttpClient
    ) { }


loginUser(user, password){

console.log("user service login function")
  let userinfo = {
    username: user,
    password: password
  }
let login = '/api/user/login'
return this.http.post(login, userinfo);
  };

signUpUser(user, password, email){

    let userinfo = {
      username: user,
      password: password
    }
  
  let login = '/api/user/login'
  return this.http.post(login, userinfo);
    };



logoutUser(){

  this.authenticated = false;
  console.log("user logged out");
}

isAuth(){
  return this.authenticated;
}
}