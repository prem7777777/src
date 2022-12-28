import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  url ='http://localhost:5184/api/Get_Method/';
  constructor(private http:HttpClient) { }

  Getvegetables()
  {
    return this.http.get(this.url + 'Get_Vegetables');
  }
  GetBiscuits()
  {
   return this.http.get(this.url + 'Get_Biscuits');
  }
  GetColddrinks()
  {
    return this.http.get(this.url+ 'Get_Colddrinks');
  }
  GetFruits() {
    return this.http.get(this.url + 'Get_Fruits');
  }
}
