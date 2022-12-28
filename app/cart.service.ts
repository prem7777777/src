import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.productList.asObservable();
  }

  // addtoCart(product : any){

  //   for(let i=0;i<this.cartItemList.length;i++){
  //     if(this.cartItemList[i].id == product.id){
  //       this.cartItemList =  this.cartItemList[i].quantity + product.quantity;
  //       this.productList.next(this.cartItemList);
  //       console.log(this.cartItemList);

  //     }else{
  //       this.cartItemList.push(product);
  //       this.productList.next(this.cartItemList);
  //       this.getTotalPrice();
  //       console.log(this.cartItemList)
  //     }
  //   }

  // }

  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList)
  //   this.cartNumberFun();
  // }

  addtoCart(product: any) {
    let CartDataNull = localStorage.getItem('localCart');
    if (CartDataNull == null) {
      let storeData: any = [];
      storeData.push(product);
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      localStorage.setItem('localCart', JSON.stringify(storeData));
    } else {
      var id = product.id;
      let index: number = 0;
      this.cartItemList = JSON.parse(localStorage.getItem('localCart') || '{}');
      // for (let i = 0; i < this.cartItemList.length; i++) {
      //   if (parseInt(id) === parseInt(this.cartItemList[i].id)) {
      //     this.cartItemList[i].quantity = product.quantity;
      //     this.productList.next(this.cartItemList);
      //     index = i;
      //     break;
      //   }
      // }
      if (index == 0) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        localStorage.setItem('localCart', JSON.stringify(this.cartItemList));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.cartItemList));
        this.productList.next(this.cartItemList);
      }
    }
    this.cartNumberFun();
  }

  // cartNumberFun(): number{
  //   let cartNumber = 0;
  //   var cartValue =JSON.parse(localStorage.getItem('localCart'));
  //   this.cartNumber = cartValue.length;
  //   this.cartSubject.next(this.cartNumber);
  //   // console.log( this.cartNumber);
  // }

  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.cartSubject.next(this.cartNumber);
    // console.log( this.cartNumber);
  }

  plus(product: any) {
    if (product.quantity != 5) {
      product.quantity = product.quantity + 1;
    }
  }
  minus(product: any) {
    if (product.quantity != 0) {
      product.quantity = product.quantity - 1;
    }
  }

  getTotalPrice(): number {
    // let qty = JSON.parse(localStorage.getItem('localCart'));
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.quantity;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
    localStorage.setItem('localCart', JSON.stringify(this.cartItemList));
    this.cartNumberFun();
  }
  removeAllCart() {
    this.cartItemList = [];
    localStorage.removeItem('localCart');
    this.productList.next(this.cartItemList);
    // this.cartNumberFun();
  }
  getProduct() {
    return this.http
      .get<any>('http://localhost:5184/api/Get_Method/Get_Biscuits')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  MakePayment(val: any) {
    return this.http.post('http://localhost:5184/api/User/Post_Payment', val);
  }

  cartSubject = new Subject<any>();
}
