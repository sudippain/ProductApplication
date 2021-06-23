import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/services/login.service';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      providers  : [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('is form valid', () =>{
 

    let email=component.userLoginForm.controls['userEmail'];
    email.setValue("abb@gmail.com");


    let pass=component.userLoginForm.controls['userPassword'];
    pass.setValue("Sudip123456@");

    expect(component.userLoginForm.valid).toBeTruthy();
  });

  
  it('is form invalid - invalid data', () =>{

    let email=component.userLoginForm.controls['userEmail'];
    email.setValue("b");

    let pass=component.userLoginForm.controls['userPassword'];
    pass.setValue("b");

    expect(component.userLoginForm.valid).toBeFalsy();
  });

  it('is form invalid - Due to blank field', () =>{
 
    let email=component.userLoginForm.controls['userEmail'];
    email.setValue("");

    let pass=component.userLoginForm.controls['userPassword'];
    pass.setValue("");



    expect(component.userLoginForm.valid).toBeFalsy();
  });

 

  it('is form invalid - invalid email ', () =>{

    let email=component.userLoginForm.controls['userEmail'];
    email.setValue("bb@gmail");


    let pass=component.userLoginForm.controls['userPassword'];
    pass.setValue("bb123456@");

    expect(component.userLoginForm.valid).toBeFalsy();
  });

  

  it('is form invalid - invalid password', () =>{


    let email=component.userLoginForm.controls['userEmail'];
    email.setValue("abc@gmail.com");

    let pass=component.userLoginForm.controls['userPassword'];
    pass.setValue("1Bbbbb");

    expect(component.userLoginForm.valid).toBeFalsy();
  });

});

