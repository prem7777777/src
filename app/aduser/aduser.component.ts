import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-aduser',
  templateUrl: './aduser.component.html',
  styleUrls: ['./aduser.component.css']
})
export class AduserComponent implements OnInit {

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
  constructor(private http:SharedService,private router:Router)
  {
    this.getUserData();
  }

  ngOnInit(): void {
  }
  getUserData()
{
 this.http.getLoginList().subscribe(
   (resp)=>{
console.log(resp);
this.userDetails=resp;
   }
 );
}
Delete(user:any)
{
  this.http.DeleteUser(user.uid).subscribe(
    (resp)=>{
      console.log(resp);
     

    },
    (err)=>console.log(err)
  );
  window.location.reload();
  
  
}

Update(user:any)
{
  this.UserToUpdate =user;
 
  

}
UpdateUser()
{
  this.http.UpdateUser(this.UserToUpdate).subscribe((resp)=>{
 
  console.log(resp);
  
  },
  (err)=>{
    console.log(err);
  }
  
  ) ;
  window.location.reload();
  

}


}
