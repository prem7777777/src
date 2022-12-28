import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitsComponent implements OnInit {
  quantity: any;
  fruits: any;
  constructor( private http:HttpClient,private FruitData: GetService,private router:Router, private cartService: CartService) {

    this.FruitData.GetFruits().subscribe((data) => {
      this.fruits = data;
    });
  }
  plus(fruit) {
    if (fruit.quantity != 50) {
      fruit.quantity = fruit.quantity + 1;
    }
    // this.cartService.plus(fruit);
  }
  minus(fruit) {
    if (fruit.quantity != 1) {
      fruit.quantity = fruit.quantity - 1;
    }
    // this.cartService.minus(fruit);
  }

  public totalItem: number = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.totalItem = data.length;
      // this.price = this.cartService.getTotalPrice();
    });
  }

  addtocart(item: any) {
    alert('Product Added!!!');
    console.log(item);
    this.cartService.addtoCart(item);
  }
  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    console.log(this.cartNumber);
  }
  updatefruit(){
    
  this.http.put('http://localhost:5184/api/Fruits/Update',this.fruits.value,{ responseType: 'text' }).subscribe(data=>{
 
  console.log(data);
  if(data == "Fruit Update Succesfull")
  {
        alert("Quantity Update Successful");
        this.router.navigate(['/Cart']);
    
  }
 
},

error=>{
  if(error){
    console.log(error);
    alert("Quantity update failed");
  }
}
);
}
}

