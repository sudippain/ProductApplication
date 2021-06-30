import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = "";
  constructor(private http:HttpClient) { 
    this.url = window.location.hostname;
  }

  usersignup(user:User){
    this.url = this.url + ":8085/user/registerUser";
    return this.http.post(this.url,user,{responseType:'text'});
  }
 
}
