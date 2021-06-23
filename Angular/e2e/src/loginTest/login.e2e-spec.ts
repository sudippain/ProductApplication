import { LoginPage} from './login.po';

import { browser,protractor } from 'protractor';
import { NewsPage } from '../NewsComponentTest/news.po';


describe('Protractor - Login testing', () => {
let loginPage : LoginPage;
let newsPage : NewsPage;

beforeEach(() =>{
loginPage = new LoginPage();
newsPage = new NewsPage();
});

it('check title when login page loads', () =>{
    loginPage.navigateTo();
    expect(loginPage.getPageTitleText().getText()).toEqual("Login");
});


it('check error with no data', () =>{
   
   
    loginPage.clickLogin();
    expect(loginPage.getEmailErrorMessage1().getText()).toEqual("Email is required");
    expect(loginPage.getPasswordErrorMessage1().getText()).toEqual("Password is required");
});

 it('check error with invalid email and password', () =>{
     loginPage.setEmail('agg@gd');
     loginPage.setPassword('gfsf223');
     expect(loginPage.getEmailErrorMessage2().getText()).toEqual("Email must be valid email address");
     expect(loginPage.getPasswordErrorMessage2().getText()).toEqual("Password must contain at least eight characters,one capital letter and at least one number");
 });
 it('check error with invalid email', () =>{
     loginPage.setEmail('cgdg');
     loginPage.setPassword('Sudip123457898962@');
     loginPage.clickLogin();
     expect(loginPage.getEmailErrorMessage2().getText()).toEqual("Email must be valid email address");
    
 });

 it('check error with invalid password' , () =>{
     loginPage.setEmail("sudip@gmail.com");
     loginPage.setPassword("audip14");
     loginPage.clickLogin();
     expect(loginPage.getPasswordErrorMessage2().getText()).toEqual("Password must contain at least eight characters,one capital letter and at least one number");
 });

 it('check Reset button' , () =>{
     loginPage.clickLogin();
     loginPage.setEmail("sudip@gmail.com");
     loginPage.setPassword("saudip14@")
     loginPage.clickReset();
     expect(loginPage.getEmailErrorMessage1().getText()).toEqual('Email is required');
     expect(loginPage.getPasswordErrorMessage1().getText()).toEqual('Password is required');


 })
 it('check success with valid email and valid password',  () =>{
     loginPage.setEmail("anik@gmail.com");
     loginPage.setPassword("Anik1234@");
     loginPage.clickLogin();
     var timeoutInMilliseconds = 1000;
     browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
     var alertDialog = browser.switchTo().alert();
     expect(alertDialog.getText()).toEqual("Wellcome");
     alertDialog.accept();
     expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/News");
     newsPage.clickLogoutButton();
 });
})