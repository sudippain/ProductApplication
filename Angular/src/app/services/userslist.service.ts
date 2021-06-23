import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserslistService {

  constructor(private http:HttpClient) { }

  changeUserStatus(userEmail:any):Observable<any>{
   
    return this.http.get("http://13.233.105.119:8085/admin/changeStatus/"+userEmail,{responseType:'text'});
    
  }

  AllUsersList():Observable<any>{
   
    return this.http.get("http://13.233.105.119:8085/admin/getAllUsers");
  }

  GetUser(userNameSearch:String):Observable<any>{
    return this.http.get("http://13.233.105.119:8085/admin/getSearchUsers/"+userNameSearch);
  }

  AllProducts():Observable<any>{
    return this.http.get("http://13.233.105.119:8085/admin/getAllProductList");
  }

 
}
