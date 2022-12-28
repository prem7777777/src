import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fruit } from '../shared/fruit.model';
@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {
  url:string='http://localhost:5184/api/Fruits';
  constructor(private http: HttpClient) { }
 fruitData:Fruit=new Fruit();
 listFruit:Fruit[]=[];
 fruits:any;
 // GetFruits() {
   // return this.http.get(this.url);
  //}
//add fruit
  saveFruit()
  {
    return this.http.post(this.url+"/postFruit",this.fruitData);
  }
  //update fruit
  updateFruit()
  {
    return this.http.put(`${this.url}/${this.fruitData.id}` ,this.fruitData);
  }
  //delete fruit
  deleteFruit(id:number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  //get fruits
  getFruits():Observable<Fruit[]>
  {
    return this.http.get<Fruit[]>(this.url);
  }
 
}
