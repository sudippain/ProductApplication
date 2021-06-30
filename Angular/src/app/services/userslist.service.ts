import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserslistService {
  url = "";
  constructor(private http:HttpClient) { 
    this.url = window.location.hostname;
  }

  changeUserStatus(userEmail:any):Observable<any>{
    this.url = this.url + ":8085/user/getUserDetails"+userEmail;
    return this.http.get(this.url,{responseType:'text'});
    
  }

  AllUsersList():Observable<any>{
    this.url = this.url + ":8085/admin/getAllUsers";
    return this.http.get(this.url);
  }

  GetUser(userNameSearch:String):Observable<any>{
    this.url = this.url + ":8085/admin/getSearchUsers/"+userNameSearch;
    return this.http.get(this.url);
  }

  AllProducts():Observable<any>{
    this.url = this.url + ":8085/admin/getAllProductList";
    return this.http.get(this.url);
  }

 
}
