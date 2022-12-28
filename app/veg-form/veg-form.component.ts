import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { VegetableService } from '../Services/vegetable.service';
import { Vegetable } from '../shared/fruit.model'; 
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-veg-form',
  templateUrl: './veg-form.component.html',
  styleUrls: ['./veg-form.component.css']
})
export class VegFormComponent implements OnInit {

  vegetableDetails: any;
  VegetablesToUpdate={
id:"",
title:"",
price:"",
quantity:"",
image:""

  };

 
  constructor(private http:SharedService,public vegetableService:VegetableService,/*public toast:ToastrService*/) { this.getVegetablesData(); }
 
  ngOnInit(): void {
   
 
  }
  getVegetablesData()
  {
   this.http.getVegetableList().subscribe(
     (resp)=>{
  console.log(resp);
  this.vegetableDetails=resp;
     }
   );
  }
  Delete(vegetable:any)
{
  this.http.DeleteVegetable(vegetable.id).subscribe(
    (resp)=>{
      console.log(resp);
     

    },
    (err)=>console.log(err)
  );
  window.location.reload();
  
  
}
Update(vegetable:any)
{
  this.VegetablesToUpdate =vegetable;
 
  

}
UpdateVegetable()
{
  this.http.UpdateVegetable(this.VegetablesToUpdate).subscribe((resp)=>{
 
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
    
    this.vegetableService.vegetableData.id==0;
      this.insertVegetable(form);
      window.location.reload();    
     
  }
  insertVegetable(myform:NgForm)
  {  this.vegetableService.saveVegetable().subscribe(d=> {
   
     alert("Added successfully");
    
    
    });
  }
  
  
 
}
