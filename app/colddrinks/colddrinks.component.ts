import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-colddrinks',
  templateUrl: './colddrinks.component.html',
  styleUrls: ['./colddrinks.component.css'],
})
export class ColddrinksComponent implements OnInit {
  colddrinks: any;
  constructor(
    private colddrinkData: GetService,
    private cartService: CartService
  ) {
    this.colddrinkData.GetColddrinks().subscribe((data) => {
      this.colddrinks = data;
    });
  }
  plus(item) {
    if (item.quantity != 5) {
      item.quantity = item.quantity + 1;
    }
    // this.cartService.plus(fruit);
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
}
