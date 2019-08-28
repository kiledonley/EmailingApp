import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  text = 'enter a username AND password please';



  constructor(private userService: UserService) { }


  ngOnInit() {
  }
  login() {
    if (!this.username || !this.password) {
      console.log(this.text);
      return;
    }
    // this.userService.loginUser(this.username, this.password);
  }

}
