import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
//import { CartService } from 'src/app/cart.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cod-payment',
  templateUrl: './cod-payment.component.html',
  styleUrls: ['./cod-payment.component.css']
})
export class CODPaymentComponent implements OnInit {
  public cartItemList : any =[]
  registrationForm:any

  constructor(private http:HttpClient, private cart:CartService, private fb:FormBuilder,private router:Router) { 
    this.createRegistrationForm();
  }
  public products : any = [];
  public grandTotal !: number;
  public totalprice:any;

  createRegistrationForm(): void{
    this.registrationForm = this.fb.group({
      name: ['',Validators.required],      
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required, Validators.email]],
      landmark:['',Validators.required],
      street:['',Validators.required],
      city:['',Validators.required,Validators.minLength(3),Validators.maxLength(20)],
      state:['',Validators.required],
      pincode:['',[Validators.required,Validators.pattern("^[1-9][0-9]{5}$")]]
     
    });
  }
    ngOnInit(): void {
    
      this.totalprice = this.cart.getTotalPrice();
      this.cart.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cart.getTotalPrice();
        
      })
  
    }
    
    handleClear():void{
      this.registrationForm.reset();
    }
    payment(){
       console.log(this.registrationForm)
      this.http.post('http://localhost:5184/api/COD/Post_COD',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
     
      console.log(data)
      if(data == "COD Succesfull")
      {
       // success=>{
          //if(success){
          //  console.log(success);
            alert("Order Success");
            this.router.navigate(['/MyOrder']);
         // }
       // };
      }
     
    },
    
    error=>{
      if(error){
         console.log(error);
        alert("Failed to Order");
        //this.router.navigate(['/Menu']);
      }
    }
    );
    }
    }
  