import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../Model/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  url = "";
  constructor(private httpClient:HttpClient) {
    this.url = window.location.hostname;
   }

  getProduct():Observable<any>{
  
    this.url = this.url + ":8085/user/productlist";
    return this.httpClient.get(this.url);
  }
  removeProductItem(id):Observable<any>{
    this.url = this.url + ":8085/user/delete/product/"+id;
    return this.httpClient.delete(this.url);
  }

  updateProductItem(pd:ProductDetails):Observable<any>{
    console.log("Call Update Service");
    this.url = this.url + ":8085/user/updateproduct";
    return this.httpClient.post(this.url,pd);
  }
  addProductItem(pd:ProductDetails):Observable<any>{
    this.url = this.url + ":8085/user/addproduct";
    return this.httpClient.post(this.url,pd);
  }

}
