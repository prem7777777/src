import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {

  constructor(private router: Router) { }
  add()
  {
    this.router.navigate(['/FruitForm']);
  }
  addVeg()
  {
    this.router.navigate(['/VegForm']);
  }
  addBiscuit()
  {
    this.router.navigate(['/BiscuitForm']);
  }
  addColddrink()
  {
    this.router.navigate(['/ColddrinkForm']);
  }

  ngOnInit(): void {
  }
  

}
