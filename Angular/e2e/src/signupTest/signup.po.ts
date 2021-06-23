import { browser, by, element } from 'protractor';

export class SignupPage{
    constructor(){

    }
    navigateTo(){
       return browser.get('/Signup');
    }
    getPageTitleText(){
       return element(by.css('h2'));
    }

    getNameErrorMessage1(){
        return element(by.id('nameError1'));
    }
    getNameErrorMessage2(){
        return element(by.id('nameError2'));
    }
    getNameErrorMessage3(){
        return element(by.id('nameError3'));
    }
   
    getEmailErrorMessage1(){
        return element(by.id('emailError1'));
    }
    getEmailErrorMessage2(){
        return element(by.id('emailError2'));
    }
    
    getContactNumberErrorMessage1(){
        return element(by.id('contactError1'));
    }
    getContactNumberErrorMessage2(){
        return element(by.id('contactError2'));
    }
    getContactNumberErrorMessage3(){
        return element(by.id('contactError3'));
    }
    getPasswordErrorMessage1(){
        return element(by.id('passError1'));
    }
    getPasswordErrorMessage2(){
        return element(by.id('passError2'));
    }
   
    setName(userName:string){
        element(by.id('userName')).clear();
        element(by.id('userName')).sendKeys(userName);
    }
    setEmail(userEmail: string){
        element(by.id('userEmail')).clear();
        element(by.id('userEmail')).sendKeys(userEmail);
    }
    setContact(userContactNumber : string){
        element(by.id('userContact')).clear();
        element(by.id('userContact')).sendKeys(userContactNumber);
    }
    setPassword(userPassword: string){
       element(by.id('userPassword')).clear();
        element(by.id('userPassword')).sendKeys(userPassword);
    }
    clickReset(){
        return element(by.id('signupReset')).click();
    }
    clickSignup() {
        return element(by.id('signup')).click();
    }
    clickLogin(){
        return element(by.css('a')).click();
    }

}