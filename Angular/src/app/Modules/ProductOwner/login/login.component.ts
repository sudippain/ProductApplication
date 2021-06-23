import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validator, Validators  } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/Model/user';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  userLoginForm:FormGroup;
  submitted:boolean;
  status:String='';
  visi:boolean=false;
  visiEmail:boolean=false;
  constructor(private router:Router,private formbuilder:FormBuilder,private loginService:LoginService) { }

  public ngOnInit() {
    $(document).ready(function(){
      $(".toggle-password").click(function() {
  
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
  });
    this.submitted=false;
    this.userLoginForm=this.formbuilder.group({

      userEmail : ['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_]{2,5})\\.([a-zA-Z]{2,5})$')]],
      userPassword :['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$%&*!]).{8,}$')]]

    });
  }
  get f() {
    // console.log(this.userLoginForm.value.userEmail);
    return this.userLoginForm.controls;
  }
 public clickSignup():void{
    this.router.navigate(['Signup']);
  }

  
  focusInFunctionEmail(){
    
    this.visiEmail=true;
 }
 focusOutFunctionEmail(){
   
   this.visiEmail=false;
}

  focusInFunction(){
    
     this.visi=true;
  }
  focusOutFunction(){
    
    this.visi=false;
 }

  onSubmit(user:User){
    this.submitted=true;
    console.log(user);
    if(this.userLoginForm.invalid)
    return;
    this.loginService.userlogin(user).subscribe(
      data => {
        this.status=data.toString();
      if(this.status.match("User Already BlackListed")){
        alert("BlackListed User");
        // window.location.reload()
         this.clickSignup();
      }
      else{
        alert("Wellcome");
        console.log(data);
        window.sessionStorage.setItem('Token', data);
        window.sessionStorage.setItem('userEmail',this.userLoginForm.value.userEmail);
        if(window.sessionStorage.getItem('userEmail').match("admin@gmail.com"))
        {
           
              //  this.router.navigate(['AllUsers'])
              console.log("I am Admin");
              this.router.navigate(['UsersList']);
        }
        else{
        this.router.navigate(['Product']);
        }
      }
      },
      (error)=>{
        alert("Bad Credential");
        this.userLoginForm.reset();
      }
    )
    // console.log(this.userLoginForm.value.userEmail);

           
  }

}
