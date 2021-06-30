import { Injectable } from '@angular/core';
import {  User } from'../Model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "";
  constructor(private http:HttpClient) {
   this.url = window.location.hostname;
   }
  
  userlogin(user:User){

    
    this.url = this.url + ":8085/user/login";
    return this.http.post(this.url,user,{responseType:'text'});

  }

}
