import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Colddrink } from '../shared/fruit.model';
import { ColddrinkService } from '../Services/colddrink.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-colddrinks-form',
  templateUrl: './colddrinks-form.component.html',
  styleUrls: ['./colddrinks-form.component.css']
})
export class ColddrinksFormComponent implements OnInit {
  colddrinkDetails: any;
  ColddrinksToUpdate={
id:"",
title:"",
price:"",
quantity:""  };
  constructor(private http:SharedService,public colddrinkService:ColddrinkService) {this.getColddrinksData(); }
  ngOnInit(): void {
  }
  getColddrinksData()
  {
   this.http.getColddrinkList().subscribe(
     (resp)=>{
  console.log(resp);
  this.colddrinkDetails=resp;
     }
   );
  }
  Delete(colddrink:any)
  {
    this.http.DeleteColddrink(colddrink.id).subscribe(
      (resp)=>{
        console.log(resp);
       
 
      },
      (err)=>console.log(err)
    );
    window.location.reload();  
  }
  Update(colddrink:any)
  {
    this.ColddrinksToUpdate =colddrink;
   
   
 
  }
  UpdateColddrink()
  {
    this.http.UpdateColddrink(this.ColddrinksToUpdate).subscribe((resp)=>{
   
    console.log(resp);
   
    },
    (err)=>{
      console.log(err);
    }
   
    ) ;
    window.location.reload();  
  }
  submit(form:NgForm)
{
 
  this.colddrinkService.colddrinkData.id==0;
    this.insertColddrink(form);
    window.location.reload();
         
   
}
insertColddrink(myform:NgForm)
{  this.colddrinkService.saveColddrink().subscribe(d=> {
   
   alert("Added successfully");
 
 
  });
}
 
}