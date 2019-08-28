import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticated: false;
  constructor(private router: Router) { }

// loginUser(username, password){
//   let users = JSON.parse(localStorage.getItem("users"));
//   // Makes sure there is a user registered to attempt login
//   let userToLoginArray = users.filter(user => user.username == username);
//   let userToLogin = userToLoginArray[0];
//   // if (!userToLogin){
//   //   console.log("no such user registered!");
//   //   return;
//   // }

//   // password check
//   if (!userToLogin || userToLogin.password != password){
//     console.log("Username or Password is incorrect. Please try again.");
//     return;
//   };
//   this.authenticated = true;
//   console.log(users);
//   let id = users.find(users => users.username === username).userId;
//   console.log(id);
//   localStorage.setItem('currentId', id.toString());
//   console.log(`Logged in User: ${username}!`);
//   this.router.navigate(['playlists']);

// }
signUpUser(u, p, e){
  // creates a default user
  if (JSON.parse(localStorage.getItem("users")) === null){
    let newUser = [{
      username: "username",
      userId: 1,
      password: "password",
      email: "username@gmail.com",
      nickname: "User"
      }];
    localStorage.setItem('users', JSON.stringify(newUser));
    localStorage.setItem('nextId', "1");
  }
}
}
