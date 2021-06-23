import { browser, element, by} from 'protractor';
export class LoginPage{
    constructor()
    {

    }
    navigateTo(){
        return browser.get('/Login');
    }
    getEmailErrorMessage1(){
        return element(by.id("userEmailError1"));
    }
    getEmailErrorMessage2(){
        return element(by.id("userEmailError2"));
    }
    getPasswordErrorMessage1(){
        return element(by.id("userPassError1"));
    }
    getPasswordErrorMessage2(){
        return element(by.id("userPassError2"));
    }
    getPageTitleText(){
        return element(by.css('h2'));
    }
    setEmail(userEmail:string){
        element(by.id('userEmail')).clear();
        element(by.id('userEmail')).sendKeys(userEmail);
    }
    setPassword(userPassword:string){
        element(by.id('userPassword')).clear();
        element(by.id('userPassword')).sendKeys(userPassword);
    }
    clickReset(){
        return element(by.id('loginReset')).click();
    }
   clickLogin(){
       return element(by.id('loginSuccess')).click();
   }
    clickSignup(){
        return element(by.css('a')).click();
    }
}