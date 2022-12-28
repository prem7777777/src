import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admenu',
  templateUrl: './admenu.component.html',
  styleUrls: ['./admenu.component.css']
})
export class AdmenuComponent implements OnInit {
  menuDetails: any;
  MenuToUpdate={
id:"",
title:"",
price:"",
quantity:"",
image:""

  };
  constructor(private http:SharedService,private router:Router)
  {
    this.getMenuData();
  }

  ngOnInit(): void {
  }
  getMenuData()
{
 this.http.getMenuList().subscribe(
   (resp)=>{
console.log(resp);
this.menuDetails=resp;
   }
 );
}
Delete(menu:any)
{
  this.http.DeleteMenu(menu.id).subscribe(
    (resp)=>{
      console.log(resp);
     

    },
    (err)=>console.log(err)
  );
  window.location.reload();
  
  
}

Update(menu:any)
{
  this.MenuToUpdate =menu;
 
  

}
UpdateMenu()
{
  this.http.UpdateMenu(this.MenuToUpdate).subscribe((resp)=>{
 
  console.log(resp);
  
  },
  (err)=>{
    console.log(err);
  }
  
  ) ;
  window.location.reload();
  

}


}
