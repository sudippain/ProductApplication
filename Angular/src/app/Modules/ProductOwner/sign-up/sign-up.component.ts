import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { SignUpService } from 'src/app/services/sign-up.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userRegistrationForm: FormGroup;
  submitted: boolean;
  status:String='';
  constructor(private router:Router,private formbuilder:FormBuilder,private userService:SignUpService) { }

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
    this.userRegistrationForm=this.formbuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      userEmail :['',[Validators.required, Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_]{2,5})\\.([a-zA-Z]{2,5})$')]],
      userContactNumber :['',[Validators.required,Validators.minLength(10),Validators.pattern('^([0-9])+$')]],
       userPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$%&*!]).{8,}$')]]
  
    });
  }
  get f() {
    return this.userRegistrationForm.controls;
  }
  onSubmit(user:User):void {
    // TODO: Use EventEmitter with form value
    this.submitted=true;
    if(this.userRegistrationForm.invalid){
      return;
    };
    
    user.role="ROLE_USER";
    user.userStatus=true;
    console.log(user.userName);
    this.userService.usersignup(user).subscribe(
         
      data =>{
        this.status=data.toString();
        if(this.status.match("User Registration Successfull")){
        alert("Registration Successfull");
        this.router.navigate(['Login']);
      }
      else{
        alert(data);
        // window.location.reload();
        this.userRegistrationForm.reset();
        
      }
      
      
    });
    
  }

}
