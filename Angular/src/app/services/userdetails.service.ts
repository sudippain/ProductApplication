import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  url = "";
  constructor(private httpClient:HttpClient) {
    this.url = window.location.hostname;
   }

  userDetails():Observable<any>{
    this.url = this.url + ":8085/user/getUserDetails";
    return this.httpClient.get(this.url);
  }


}
