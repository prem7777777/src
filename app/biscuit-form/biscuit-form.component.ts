import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Biscuit } from '../shared/fruit.model';
import { BiscuitService } from '../Services/biscuit.service';
import { SharedService } from '../shared.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-biscuit-form',
  templateUrl: './biscuit-form.component.html',
  styleUrls: ['./biscuit-form.component.css'],
})
export class BiscuitFormComponent implements OnInit {
  biscuitDetails: any;
  BiscuitsToUpdate = {
    id: '',
    title: '',
    price: '',
    quantity: ''
   
  };
  constructor(
    private http: SharedService,
    public biscuitService: BiscuitService,
    private cartService: CartService
  ) {
    this.getBiscuitssData();
  }
  public totalItem: number = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.totalItem = data.length;
      // this.price = this.cartService.getTotalPrice();
    });
  }
  getBiscuitssData() {
    this.http.getBiscuitList().subscribe((resp) => {
      console.log(resp);
      this.biscuitDetails = resp;
    });
  }
  Delete(biscuit: any) {
    this.http.DeleteBiscuit(biscuit.id).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => console.log(err)
    );
    window.location.reload();
  }
  Update(biscuit: any) {
    this.BiscuitsToUpdate = biscuit;
  }
  UpdateBiscuit() {
    this.http.UpdateBiscuit(this.BiscuitsToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
    window.location.reload();
  }
  submit(form: NgForm) {
    this.biscuitService.biscuitData.id == 0;
    this.insertBiscuit(form);
    window.location.reload();
  }
  insertBiscuit(myform: NgForm) {
    this.biscuitService.saveBiscuit().subscribe((d) => {
      alert('Added successfully');
    });
  }
}
