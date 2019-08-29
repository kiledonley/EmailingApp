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


  constructor(private userService: UserService, private formBuilder: FormBuilder,
              private router: Router) { }


  register() {
    if (this.signupForm.invalid) {
      console.log('Fix your Errors Bitch');
      return}
      

      this.router.navigateByUrl('/signin');
      return;

    this.userService.signUpUser(this.username.value, this.password.value, this.email.value);
  }
  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
    }

    get emailConfirm() {
      return this.signupForm.get('emailConfirm');
    }

  get password() {
    return this.signupForm.get('password');


  }

  get passwordRepeat() {
    return this.signupForm.get('passwordRepeat');
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
