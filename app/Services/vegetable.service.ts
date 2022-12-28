import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vegetable } from '../shared/fruit.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VegetableService {
url ='http://localhost:5184/api/Vegetables';
  constructor(private http:HttpClient) { }
  vegetableData:Vegetable=new Vegetable();
  listVegetable:Vegetable[]=[];

  saveVegetable()
  {
    return this.http.post(this.url+"/postVegetables",this.vegetableData);
  }
  /* Getvegetables()
  {
    return this.http.get(this.url);
  } */
  getVegetables():Observable<Vegetable[]>
  {
    return this.http.get<Vegetable[]>(this.url);
  }
}
