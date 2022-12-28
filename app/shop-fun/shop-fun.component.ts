import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-fun',
  templateUrl: './shop-fun.component.html',
  styleUrls: ['./shop-fun.component.css']
})
export class ShopFunComponent implements OnInit {

  userDetails: any;
  UserToUpdate={
uid:"",
fname:"",
lname:"",
mobile:"",
gender:"",
address:"",
city:"",
pincode:"",
email:"",
password:""

  };
  constructor(private http:SharedService,private router:Router) { }

  ngOnInit(): void {
  }

}
