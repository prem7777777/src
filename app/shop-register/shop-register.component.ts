import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-register',
  templateUrl: './shop-register.component.html',
  styleUrls: ['./shop-register.component.css']
})
export class ShopRegisterComponent implements OnInit {

  registrationForm : FormGroup;
  
  constructor(private http:HttpClient, private router:Router, private fb:FormBuilder) {
    
   }
   
  Register(){
    this.http.post('http://localhost:5184/api/Shop/Shop_Register',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
    console.log(data);
    if(data=="Registered Successfully")
    {
      this.router.navigate(['/ShopLogin']);
    }
    },
    error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to register");
      }
    }
    ) ;
    

  }
handleClear():void{
  this.registrationForm.reset();
}


  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      'shop_Name' : new FormControl ('',Validators.required),
      'owner_Name' : new FormControl('',Validators.required),
      'mobile' : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'email' : new FormControl('',[Validators.email,Validators.required]),
      'password' : new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$')]),
      'address' : new FormControl('',Validators.required)
      
    });

  }

}
