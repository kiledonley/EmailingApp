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
    console.log(this.username, this.password, this.passwordRepeat, this.email, this.emailConfirm);
    if (this.password === this.passwordRepeat && this.email === this.emailConfirm) {
    this.userService.registerUser(this.username, this.password, this.email).subscribe(val => {
      console.log(val);
      if (val === 'User registered') {
        this.router.navigateByUrl('/login');
      }

    }


      );
  }
}

get username() {
  return this.signupForm.get('username');
}
get password() {
  return this.signupForm.get('password');
}

get passwordRepeat() {
  return this.signupForm.get('passwordRepeat');
}

get email() {
  return this.signupForm.get('email');
}
get emailConfirm() {
  return this.signupForm.get('emailConfirm');
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
