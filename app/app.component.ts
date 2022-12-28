import { Component } from '@angular/core';
import { __values } from 'tslib';
import { SharedService } from './shared.service';
import { CartService } from './cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Just Click & Order';
  constructor(private http:SharedService, private cartService:CartService)
  {
   this.cartService.cartSubject.subscribe(data => {
    // this.cartItem = data;
   });
  
 
  }
  
  
  public price :any;
  public totalItem:number = 0;
  ngOnInit() : void {

    this.cartService.getProducts().subscribe(data =>{
      this.totalItem =data.length;
      this.price = this.cartService.getTotalPrice();
    })

    // this.cartItemFun();
    
    
  }
  // Logic for cart item number **************************
  // cartItem:number =0;
  // cartItemFun(){
  //     if(localStorage.getItem('localCart'))
  //     {
  //       var cartCount = JSON.parse(localStorage.getItem('localCart'));
  //       // console.log(cartCount);
  //       this.cartItem = cartCount.length;
  //     }
  //     else{

  //       // localStorage.removeItem('localCart');
  //       // this.cartItem = 0;
  //       // this.productList.next(this.cartItemList);
  //     }
  // }

  }
