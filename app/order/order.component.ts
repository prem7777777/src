import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentDetails: any;
  codDetails:any;

  constructor (private http:SharedService,private router:Router,private formBuilder:FormBuilder){
   
    
    
      this.getPaymentData();
      this.getCodData();
    
  
   
    };
  




  ngOnInit(): void {
  }
  getPaymentData()
  {
   this.http.getPaymentList().subscribe(
     (resp)=>{
  console.log(resp);
  this.paymentDetails=resp;
     }
   );
  }
  
  getCodData()
  {
   this.http.getCodList().subscribe(
     (resp)=>{
  console.log(resp);
  this.codDetails=resp;
     }
   );
  }
}
