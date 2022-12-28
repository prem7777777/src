import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  password;
  show = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {}

  UserLogin() {
    console.log(this.LoginForm);

    this.http
      .post('http://localhost:5184/api/User/User_Login', this.LoginForm.value, {
        responseType: 'text',
      })
      .subscribe(
        (users) => {
          console.log(users);
          if (users == 'Login Successfull') {
            alert('Login Successfull!!');
            this.router.navigate(['/Menu']);
          }
        },
        (error) => {
          if (error) {
            console.log(error);
            alert('Sorry unable to login');
          }
        }
      );
  }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
     onClick() {
    
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
