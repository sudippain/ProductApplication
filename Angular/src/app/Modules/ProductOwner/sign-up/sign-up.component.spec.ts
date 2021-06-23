import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpService } from 'src/app/services/sign-up.service';
import { By } from '@angular/platform-browser';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports : [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      providers : [SignUpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is form valid', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("sudip");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("abb@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656231445");


    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("Sudip123456@");

    expect(component.userRegistrationForm.valid).toBeTruthy();
  });

  
  it('is form invalid - invalid data', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("b");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("b");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656235");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("b");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });

  it('is form invalid - Due to blank field', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });

  it('is form invalid - missing user name', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("b@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656231445");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("bb123456@");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });
  it('is form invalid -  user name is invalid', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("dd#$");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("b@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656231445");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("bb123456@");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });

  it('is form invalid - invalid email ', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("bb");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("bb@gmail");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656231445");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("bb123456@");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });

  it('is form invalid - invalid contact number', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("bb");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("bb@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("96562314");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("bb123456@");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });

  it('is form invalid - invalid password', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("bb");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("abc@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("9656852314");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("1Bbbbb");

    expect(component.userRegistrationForm.valid).toBeFalsy();
  });
  
  fit('is form invalid - Due to all field is emplty', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("");
    
    fixture.debugElement.query(By.css('#signup')).nativeElement.click();
    fixture.detectChanges();
    let error1=fixture.debugElement.nativeElement.querySelector('#nameError1');
    expect(error1.innerHTML).toContain("Name is required");
    let error2=fixture.debugElement.nativeElement.querySelector('#emailError1');
    expect(error2.innerHTML).toContain("Email is required");
    let error3=fixture.debugElement.nativeElement.querySelector('#contactError1');
    expect(error3.innerHTML).toContain("Contact number is required");
    let error4=fixture.debugElement.nativeElement.querySelector('#passError1');
    expect(error4.innerHTML).toContain("Password is required");
  });


  fit('is form invalid - Due to name field is empty', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("s@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("4526393852");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("Sudip123@#");
    
    fixture.debugElement.query(By.css('#signup')).nativeElement.click();
    fixture.detectChanges();
    let error1=fixture.debugElement.nativeElement.querySelector('#nameError1');
    expect(error1.innerHTML).toContain("Name is required");
  });
  

  fit('is form invalid - Due to email field is empty', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("sudip");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("4526393852");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("Sudip123@#");
    
    fixture.debugElement.query(By.css('#signup')).nativeElement.click();
    fixture.detectChanges();
    let error1=fixture.debugElement.nativeElement.querySelector('#emailError1');
    expect(error1.innerHTML).toContain("Email is required");
  });
  
  fit('is form invalid - Due to contact is emplty', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("Sudip");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("s@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("Sudip123@#");
    
    fixture.debugElement.query(By.css('#signup')).nativeElement.click();
    fixture.detectChanges();
    let error1=fixture.debugElement.nativeElement.querySelector('#contactError1');
    expect(error1.innerHTML).toContain("Contact number is required");
  });
  
  fit('is form invalid - Due to pasword is emplty', () =>{
    let name=component.userRegistrationForm.controls['userName'];
    name.setValue("");

    let email=component.userRegistrationForm.controls['userEmail'];
    email.setValue("s@gmail.com");

    let contact=component.userRegistrationForm.controls['userContactNumber'];
    contact.setValue("4526393852");

    let pass=component.userRegistrationForm.controls['userPassword'];
    pass.setValue("");
    
    fixture.debugElement.query(By.css('#signup')).nativeElement.click();
    fixture.detectChanges();
    let error1=fixture.debugElement.nativeElement.querySelector('#passError1');
    expect(error1.innerHTML).toContain("Password is required");
  });

});
