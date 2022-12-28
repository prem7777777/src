import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css'],
})
export class MyorderComponent implements OnInit {
  // public cartItemList : any =[]
  constructor(
    private cartservice: CartService,
    private router: Router,
    private cartService: CartService
  ) {}
  public cartItemList: any = ([] = JSON.parse(
    localStorage.getItem('localCart') || '{}'
  ));

  public totalprice: any;

  ngOnInit(): void {
    this.totalprice = this.cartservice.getTotalPrice();
  }
  logout() {
    this.router.navigate(['/Login']);
    this.cartService.removeAllCart();
  }
}
