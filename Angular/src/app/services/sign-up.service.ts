import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  usersignup(user:User){
    return this.http.post("http://52.66.15.105:8085/user/registerUser",user,{responseType:'text'});
  }
 
}
