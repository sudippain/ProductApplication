import { Injectable } from '@angular/core';
import {  User } from'../Model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userlogin(user:User){
    return this.http.post("http://52.66.15.105:8085/user/login",user,{responseType:'text'});

  }

}
