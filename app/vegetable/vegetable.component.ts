import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css'],
})
export class VegetableComponent implements OnInit {
  vegetables: any;

  constructor(
    private vegetableData: GetService,
    private cartService: CartService
  ) {
    this.vegetableData.Getvegetables().subscribe((data) => {
      this.vegetables = data;
    });
  }
  plus(item) {
    if (item.quantity != 5) {
      item.quantity = item.quantity + 1;
    }
  
  }
  minus(item) {
    if (item.quantity != 1) {
      item.quantity = item.quantity - 1;
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
    console.log(item);
    this.cartService.addtoCart(item);
    alert('Product Added!!!');
  }
  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    console.log(this.cartNumber);
  }
}
