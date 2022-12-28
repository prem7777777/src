import { Injectable } from '@angular/core';
import { Colddrink } from '../shared/fruit.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ColddrinkService {
  url = "http://localhost:5184/api/ColdDrinks";  
  constructor(private http:HttpClient) { }
  colddrinkData:Colddrink=new Colddrink();
  listColddrink:Colddrink[]=[];
  saveColddrink()
  {
    return this.http.post(this.url+"/postColddrinks",this.colddrinkData);
  }
  getColddrinks():Observable<Colddrink[]>
  {
    return this.http.get<Colddrink[]>(this.url);
  }
 
}