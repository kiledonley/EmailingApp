import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  text = 'enter a username AND password please';
  Routes: any;



  constructor(private userService: UserService,
              private router: Router          
    ) { }


  ngOnInit() {
  }

  login() {
    console.log("initiating the login")
    // console.log(this.userService.loginUser(this.username, this.password).subscribe)
    this.userService.loginUser(this.username, this.password).subscribe(val=> console.log(val));
    // this.router.navigateByUrl('/messages');
  }

  signuproute() {
    this.router.navigateByUrl('/signup');
};

}
