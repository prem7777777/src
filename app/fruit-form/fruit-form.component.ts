import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { FruitServiceService } from '../Services/fruit-service.service';
import { Fruit } from '../shared/fruit.model'; 
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-fruit-form',
  templateUrl: './fruit-form.component.html',
  styleUrls: ['./fruit-form.component.css']
})
export class FruitFormComponent implements OnInit {
  fruitsDetails: any;
  FruitsToUpdate={
id:"",
title:"",
price:"",
quantity:""


  };

 
  constructor(private http:SharedService,public fruiService:FruitServiceService,/*public toast:ToastrService*/) { this.getFruitsData(); }
  @ViewChild('checkbox1')
  checkBox: ElementRef;
 isSlide:string='off';
  ngOnInit(): void {
   
 
  }
  getFruitsData()
  {
   this.http.getFruitsList().subscribe(
     (resp)=>{
  console.log(resp);
  this.fruitsDetails=resp;
     }
   );
  }
  Delete(fruit:any)
{
  this.http.DeleteFruit(fruit.id).subscribe(
    (resp)=>{
      console.log(resp);
     

    },
    (err)=>console.log(err)
  );
  window.location.reload();
  
  
}
Update(fruit:any)
{
  this.FruitsToUpdate =fruit;
 
  

}
UpdateFruit()
{
  this.http.UpdateFruit(this.FruitsToUpdate).subscribe((resp)=>{
 
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
   
    this.fruiService.fruitData.id==0;
      this.insertFruit(form);
      window.location.reload();
     /* else
     this.updateFruit(form); */
  }
  insertFruit(myform:NgForm)
  {  this.fruiService.saveFruit().subscribe(d=> {
     
     alert("Added successfully");
    
    //this.toast.success('Success','Record Saved');
    });
  }
  /*updateFruit(myform:NgForm)
  {
    this.fruiService.updateFruit().subscribe(d=> {
      this.resetForm(myform);
      this.refereshData();
     //this.toast.warning('Success','Record Updated');
    });
  } */
 
 
 
}