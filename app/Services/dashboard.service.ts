import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
methods:any;
url = 'http://localhost:5184/api/Shop/';
  constructor(private http:HttpClient) { }

  postvegetable(val:any)
  {
    return this.http.post(this.url+'postVegetable',val);
  }
  postFruit(val:any)
  {
    return this.http.post(this.url+'postFruit',val);
  }

  postColddrink(val:any)
  {
    return this.http.post(this.url+'postColddrink',val);
  }

  postBiscuit(val:any)
  {
    return this.http.post(this.url+'postBakery_and_Biscuits',val);
  }

  DeleteVegetable(id: number) {
    return this.http.delete(this.url+'DeleteVegetable?id=' + id);
  }
  DeleteFruit(id: number) {
    return this.http.delete(this.url+'DeleteFruit?id=' + id);
  }
  DeleteColddrink(id: number) {
    return this.http.delete(this.url+'DeleteColddrink?id=' + id);
  }
  
  DeleteBiscuit(id: number) {
    return this.http.delete(this.url+'DeleteBakery_and_Biscuits?id=' + id);
  }
}
