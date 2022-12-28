import { Injectable } from '@angular/core';
import { Biscuit } from '../shared/fruit.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BiscuitService {
url = "http://localhost:5184/api/Biscuit";    
  constructor(private http:HttpClient) { }
  biscuitData:Biscuit=new Biscuit();
  listBiscuit:Biscuit[]=[];
 /* GetBiscuits()
  {
   return this.http.get(this.url);
  }*/
  saveBiscuit()
  {
    return this.http.post(this.url+"/postBiscuits",this.biscuitData);
  }
  getBiscuits():Observable<Biscuit[]>
  {
    return this.http.get<Biscuit[]>(this.url);
  }
 
}