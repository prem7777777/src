import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css'],
})
export class AdloginComponent implements OnInit {
  adminlogin: FormGroup;
    password;

  show = false;
  constructor(private http: HttpClient, private router: Router) {}

  AdminLogin() {
    console.log(this.adminlogin);

    this.http
      .post(
        'http://localhost:5184/api/Admin/Admin_Login',
        this.adminlogin.value,
        { responseType: 'text' }
      )
      .subscribe(
        (users) => {
          console.log(users);

          if (users == 'Login Successfull') {
            alert('Login Successfull!!');

            this.router.navigate(['/Dashboard']);
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
    this.adminlogin = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
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
