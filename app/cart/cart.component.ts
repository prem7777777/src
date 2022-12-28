import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      
      // this.getTotalPrice();
      
      
      this.CartDetails();
      // this.loadCart();
    })
  }
//   getTotalPrice(qty:number) : number{
//   let grandTotal = 0;
//   this.products.map((a:any)=>{
//     grandTotal += a.price * qty;
//   })
//   return grandTotal;
// }

// totalPrice:number=0;
// addPrice(){
//   for(let i=0; i<this.products.length; i++){
//     this.totalPrice += this.products.price * this.products.quantity; 
//   }
// }
//   minusPrice(){
//     for(let i=0; i<this.products.length; i++){
//       this.totalPrice -=  this.products.price * this.products.quantity;
//     }
//   }

  // total:number = 0;
  // loadCart(){
  //   console.log(this.getCartDetails);
    
  //   if(localStorage.getItem('localCart')){
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
  //     this.total =  this.getCartDetails.reduce(function(acc,val){
  //         return acc + (val.quantity * val.price)
  //     }, 0)
      
  //   }
  // }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
    
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  addtoCart(item:any)
  {
    this.cartService.addtoCart(item);
  }
plus(item:any)
{
  this.cartService.plus(item);
  //   let grandTotal = 0;
  //   this.products.map((a:any)=>{
  //   grandTotal += a.price * a.quantity;
  //  })
  //  return grandTotal;
  // this.addPrice();
  // this.loadCart();
}

minus(item:any)
{
  this.cartService.minus(item);
  // this.minusPrice()
  // this.loadCart();
  //  let grandTotal = 0;
  //   this.products.map((a:any)=>{
  //   grandTotal += a.price * a.quantity;
  //  })
  //  return grandTotal;
}


// plus(id, quantity){
//   // console.log(id);
//   // console.log(quantity);
//   for(let i=0; i<this.getCartDetails.length; i++){
//     if(this.getCartDetails[i].id === id){
//       if(quantity != 5)
//       {

//         this.getCartDetails[i].quantity = parseInt(quantity) + 1;
//       }
       
//     }
//     // this.loadCart();
//     localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
//   }
// }

// minus(id, quantity){
//   // console.log(id);
//   // console.log(quantity);
//   for(let i=0; i<this.getCartDetails.length; i++){
//     if(this.getCartDetails[i].id === id){
//       if(quantity != 1)
//       this.getCartDetails[i].quantity =parseInt(quantity) - 1;
//     }
//     // this.loadCart();
//     localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
//   }
// }
      

      
       

getCartDetails:any=[];
CartDetails(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
    console.log(this.getCartDetails);
  }
}
  
// getTotalPrice() : number{
//   let grandTotal = 0;
//   this.products.map((a:any)=>{
//     grandTotal += a.price * a.quantity;
//   })
//   return grandTotal;
// }
// grandTotal : number = this.products.price * this.products.quantity;

}