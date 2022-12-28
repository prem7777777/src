import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.css'],
})
export class BiscuitsComponent implements OnInit {
  biscuits: any;
  constructor(
    private BiscuitData: GetService,
    private cartService: CartService
  ) {
    this.BiscuitData.GetBiscuits().subscribe((data) => {
      this.biscuits = data;
    });
  }
  plus(biscuit) {
    if (biscuit.quantity != 5) {
      biscuit.quantity = biscuit.quantity + 1;
    }

    // this.cartService.plus(fruit);
  }

  minus(biscuit) {
    if (biscuit.quantity != 1) {
      biscuit.quantity = biscuit.quantity - 1;
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
