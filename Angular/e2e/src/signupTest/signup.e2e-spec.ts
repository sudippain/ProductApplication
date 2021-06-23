import { SignupPage } from './signup.po';

import { browser,protractor } from 'protractor';
import { LoginPage } from '../loginTest/login.po';


describe('Protractor - Signup testing', () => {
  let signupPage: SignupPage;
  let loginPage : LoginPage;

  beforeEach(() => {
    signupPage = new SignupPage();
    loginPage = new LoginPage();
  });

  it('should display signup message', () => {
    loginPage.navigateTo();
    loginPage.clickSignup();
    expect(signupPage.getPageTitleText().getText()).toEqual('Signup');
  });
  it('check error when no data in in input field', () =>{
    signupPage.clickSignup();
    expect(signupPage.getNameErrorMessage1().getText()).toEqual('Name is required');
    expect(signupPage.getEmailErrorMessage1().getText()).toEqual('Email is required');
    expect(signupPage.getContactNumberErrorMessage1().getText()).toEqual("Contact number is required");
    expect(signupPage.getPasswordErrorMessage1().getText()).toEqual('Password is required');
});
it('check error when name field invalid and name field length less than 2', () =>{
    signupPage.setName('a');
    signupPage.setEmail('abc@gmail.com');
    signupPage.setContact('7852693652');
    signupPage.setPassword('Sudip123435@');
    signupPage.clickSignup();
    expect(signupPage.getNameErrorMessage2().getText()).toEqual('Name must have atleast 2 characters');
});
it('check error when name field invalid due to name field could not accept number', () =>{
    signupPage.setName('add1');
    signupPage.setEmail('abc@gmail.com');
    signupPage.setContact('7852693652');
    signupPage.setPassword('Sudip123435@');
    signupPage.clickSignup();
    expect(signupPage.getNameErrorMessage3().getText()).toEqual('Name cannot have numbers');
});


it('check error when email is invalid', () =>{
    signupPage.setName("Sudip");
    signupPage.setEmail('abc@gdh');
    signupPage.setContact('7852693652');
    signupPage.setPassword('Sudip12345@');
    signupPage.clickSignup();
    expect(signupPage.getEmailErrorMessage2().getText()).toEqual('Email must be valid email address');
});

it('check error when contact is invalid due to less digit in phone number', () =>{
  signupPage.setName("Sudip");
  signupPage.setEmail('abc@gail.com');
  signupPage.setContact('45263989');
  signupPage.setPassword('Sudip12345@');
  signupPage.clickSignup();
  expect(signupPage.getContactNumberErrorMessage2().getText()).toEqual('Contact must have 10 characters');
});


it('check error when contact is invalid due to give letter', () =>{
  signupPage.setName("Sudip");
  signupPage.setEmail('abc@gdh');
  signupPage.setContact('348987888A');
  signupPage.setPassword('Sudip12345@');
  signupPage.clickSignup();
  expect(signupPage.getContactNumberErrorMessage3().getText()).toEqual('Contact must have numbers');
});


it('check error when password is invalid', () =>{
    signupPage.setName("Sudip");
    signupPage.setEmail('cfcgf@gmail.com');
    signupPage.setContact('7302568974');
    signupPage.setPassword('Sud45@');
    signupPage.clickSignup();
    expect(signupPage.getPasswordErrorMessage2().getText()).toEqual('Password must contain at least eight characters,one capital letter and at least one number');
});
it('check error all input field is invalid', () =>{
    signupPage.setName("S");
    signupPage.setEmail('abcgmail.com');
    signupPage.setContact('730268974');
    signupPage.setPassword('Sud45@');
    signupPage.clickSignup();
    expect(signupPage.getNameErrorMessage2().getText()).toEqual('Name must have atleast 2 characters');
    expect(signupPage.getEmailErrorMessage2().getText()).toEqual('Email must be valid email address');
    expect(signupPage.getContactNumberErrorMessage2().getText()).toEqual('Contact must have 10 characters');
    expect(signupPage.getPasswordErrorMessage2().getText()).toEqual('Password must contain at least eight characters,one capital letter and at least one number');
});

it('check Reset button', () =>{
   signupPage.clickSignup();
   signupPage.setName("Sdd");
   signupPage.setEmail('dgfdfc@gmail.com');
   signupPage.setContact('9963528565');
   signupPage.setPassword('Sudip1346@');
   signupPage.clickReset();
   expect(signupPage.getNameErrorMessage1().getText()).toEqual('Name is required');
   expect(signupPage.getEmailErrorMessage1().getText()).toEqual('Email is required');
   expect(signupPage.getContactNumberErrorMessage1().getText()).toEqual("Contact number is required");
   expect(signupPage.getPasswordErrorMessage1().getText()).toEqual('Password is required');


});

it('check if all field is valid but Email already Exists' , () =>{

    signupPage.setName('sudip pain');
    signupPage.setEmail('anik@gmail.com');
    signupPage.setContact('7894561230')
    signupPage.setPassword('Anik1234@');
    signupPage.clickSignup();
    
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Email Already Exists");
    alertDialog.accept();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/Signup');
});
it('check if all field is valid' , () =>{

    signupPage.setName('saswata');
    var s=Math.floor(Math.random() * 60) + 1
    signupPage.setEmail('Subscriber'+s+'@gmail.com');
    signupPage.setContact('7894561230')
    signupPage.setPassword('Saswata1346@');
    signupPage.clickSignup();
    
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Registration Successfull");
    alertDialog.accept();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/Login');
});

});
