import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../Model/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<any>{
    return this.httpClient.get("http://13.233.105.119:8085/user/productlist");
  }
  removeProductItem(id):Observable<any>{
    return this.httpClient.delete("http://13.233.105.119:8085/user/delete/product/"+id);
  }

  updateProductItem(pd:ProductDetails):Observable<any>{
    console.log("Call Update Service");
    return this.httpClient.post("http://13.233.105.119:8085/user/updateproduct",pd);
  }
  addProductItem(pd:ProductDetails):Observable<any>{
    return this.httpClient.post("http://13.233.105.119:8085/user/addproduct",pd);
  }

}
