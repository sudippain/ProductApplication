import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private httpClient:HttpClient) { }

  userDetails():Observable<any>{
    return this.httpClient.get("http://52.66.15.105:8085/user/getUserDetails");
  }


}
