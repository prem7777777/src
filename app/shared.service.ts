import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { visitAll } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  [x: string]: any;
  readonly APIUrl = "http://localhost:5184/api";

  constructor(private http: HttpClient) { }
  getLoginList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Admin/Get_Users');
  }
  getFruitsList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Get_Method/Get_Fruits');
  }
  DeleteFruit(id: number) {
    return this.http.delete(" http://localhost:5184/api/Fruits/Delete?id=" + id);
    
   
  }
  UpdateFruit(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Fruits/Update",val);
  }
  addLoginList(val: any) {
    return this.http.post<any>('http://localhost:5184/api/User/User_Login', val);
  }

  addRegistrationList(val: any) {
    return this.http.post<any>("http://localhost:5184/api/User/User_Registration", val);
  }                            
  getRegistrationData() {
    return this.http.get("http://localhost:5184/api/Registrations");
  }
  addPaymentList(val: any) {
    return this.http.post<any>("http://localhost:5184/api/Payments", val);
  }
  addCODPaymentList(val: any) {
    return this.http.post<any>("http://localhost:5184/api/COD", val);
  }
  // public 
  DeleteUser(id: number) {
    return this.http.delete("http://localhost:5184/api/Registrations/Delete?id=" + id);
  }
  UpdateUser(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Registrations/Update",val);
  }

  getMenuList()
  {
    return this.http.get("http://localhost:5184/api/Menu_Card");
  }

  DeleteMenu(id:number)
  {
return this.http.delete("http://localhost:5184/api/Menu_Card/Delete?id=" + id);
  }
  UpdateMenu(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Menu_Card/Update" ,val);
  }
//Vegetables
  getVegetableList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Vegetables');
  }
  DeleteVegetable(id: number) {
    return this.http.delete(" http://localhost:5184/api/Vegetables/Delete?id=" + id);
   
  }
  UpdateVegetable(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Vegetables/Update",val);
  }
  //Biscuits
  getBiscuitList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Biscuit');
  }
  DeleteBiscuit(id: number) {
    return this.http.delete(" http://localhost:5184/api/Biscuit/Delete?id=" + id);
   
  }
  UpdateBiscuit(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Biscuit/Update",val);
  }
  //Colddrinks
  getColddrinkList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/ColdDrinks');
  }
  DeleteColddrink(id: number) {
    return this.http.delete(" http://localhost:5184/api/ColdDrinks/Delete?id=" + id);
   
  }
  UpdateColddrink(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/ColdDrinks/Update",val);
  }
  getPaymentList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Payments/Get_Payment');
  }

  getCodList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/COD/Get_COD');
  }
}