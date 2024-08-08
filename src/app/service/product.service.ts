import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }
  getProduct(): Observable<any>
  {
return this._httpClient.get("https://fakestoreapi.com/products");
  }
}
