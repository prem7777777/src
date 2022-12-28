import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-login',
  templateUrl: './shop-login.component.html',
  styleUrls: ['./shop-login.component.css']
})
export class ShopLoginComponent implements OnInit {

  LoginForm:any;
  password;
  show = false;

  constructor(private http: HttpClient, private router: Router, private fb:FormBuilder) {

   }



  ShopLogin() {
    console.log(this.LoginForm)

    this.http.post('http://localhost:5184/api/Shop/ShopLogin', this.LoginForm.value, { responseType: 'text' }).subscribe(users => {
      console.log(users)
      if (users == "Login Successfull")
       {
        this.router.navigate(['/ShopDashboard']);
        
      }   
           
     },
     error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to login");
      }
    }
    
    );
   
  }
 

  ngOnInit(): void {

    this.LoginForm = new FormGroup({
      'email': new FormControl ('',[Validators.required, Validators.email]),
      'password':new FormControl('',Validators.required)
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
