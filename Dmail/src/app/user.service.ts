import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticated: boolean = false;
  constructor(private router: Router,
              private http: HttpClient,
    ) {}

public activeUserID;

loginUser(user, password){

console.log("user service login function")
  let userinfo = {
    username: user,
    password: password
  }
let login = '/api/user/login'
return this.http.post(login, userinfo).pipe(map((res) => {
  if(res != null){ 
      console.log(res);
    // this.activeUserID = res['UserID'] 
  };
  return res;
}))
}

registerUser(user, password, email){

    let newuserinfo = {
      username: user,
      password: password,
      email: email
    }
   console.log(newuserinfo);
  let register = '/api/user/register'
  return this.http.post(register, newuserinfo);
    };

activeID(){return this.activeUserID}

logoutUser(){

  this.authenticated = false;
  console.log("user logged out");
}

isAuth(){
  return this.authenticated;
}
}