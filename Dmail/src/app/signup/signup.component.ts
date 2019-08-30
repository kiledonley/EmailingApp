import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch} from '../Helper/Match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  username = '';
  password = '';
  passwordRepeat = '';
  email = '';
  emailConfirm = '';

  constructor(private userService: UserService, private formBuilder: FormBuilder,
              private router: Router) { }


  register(){
    console.log(this.username,this.password, this.passwordRepeat, this.email, this.emailConfirm)
    if(this.password === this.passwordRepeat && this.email === this.emailConfirm){
    this.userService.registerUser(this.username, this.password, this.email).subscribe(val=> {
      console.log(val) 
      if(val === "User registered"){
        this.router.navigateByUrl('/login');
      }

    }
    
      );
  }
}




  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      nickname: '',
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      }, {
        validator: [mustMatch('password', 'passwordRepeat'),
         mustMatch('email', 'emailConfirm'), ]

    });
  }

}
