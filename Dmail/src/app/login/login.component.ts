import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  text = 'enter a username AND password please';
  Routes: any;



  constructor(private userService: UserService,private formBuilder: FormBuilder,
              private router: Router          
    ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });


}

login() {
  if (this.loginForm.invalid){
    console.log("Fix your Errors Bitch");
    return;
  }
  this.userService.loginUser(this.username.value, this.password.value);




  console.log("initiating the login")
  // console.log(this.userService.loginUser(this.username, this.password).subscribe)
  this.userService.loginUser(this.username, this.password).subscribe(val=> console.log(val));
  this.router.navigateByUrl('/messages');
}
 get username(){
   return this.loginForm.get('username')
 }
 get password(){
   return this.loginForm.get('password')
 }
 signuproute() {
  this.router.navigateByUrl('/signup');
};
}