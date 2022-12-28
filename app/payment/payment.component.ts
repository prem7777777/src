import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
//import { CartService } from 'src/app/cart.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
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
      card_Name: ['',Validators.required],
      card_Number: ['',[Validators.required,Validators.pattern("^[1-9][0-9]{15}$")]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      ex_Month:['',[Validators.required,Validators.pattern("^(0[0-9])|(1[0-2]){1}$")]],
      ex_Year:['',[Validators.required,Validators.pattern("^[1-9][0-9]{3}$")]],
      cvv:['',[Validators.required,Validators.pattern("^[1-9][0-9]{2}$")]],
      //amount:['',Validators.required]
     
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

    
   
  // public Payment:any={card_Name:''

// };
handleClear():void{
  this.registrationForm.reset();
}
payment(){
  // console.log(this.registrationForm);
  this.http.post('http://localhost:5184/api/User/Post_Payment',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
 
  console.log(data);
  if(data == "Payment Succesfull")
  {
    //success=>{
    //  if(success){
     //   console.log(success);
        alert("payment Successful");
        this.router.navigate(['/MyOrder']);
     // }
    //};
  }
 
},

error=>{
  if(error){
    console.log(error);
    alert("Payment Failed");
  }
}
);
}
}
