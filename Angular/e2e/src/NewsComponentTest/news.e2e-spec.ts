

import { browser,protractor } from 'protractor';

import { NewsPage } from './news.po';
import { LoginPage } from '../loginTest/login.po';



describe('Protractor - NewsPage testing', () => {
 
    let newsPage : NewsPage;
    let loginPage: LoginPage;
  beforeEach(() => {
  
    newsPage=new NewsPage();
    loginPage=new LoginPage();

  });

  it('Click on UserDetails Button',() =>{

    loginPage.navigateTo();
    loginPage.setEmail('anik@gmail.com');
    loginPage.setPassword('Anik1234@');
    loginPage.clickLogin();
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Wellcome");
    alertDialog.accept();
    newsPage.clickUserDetails().click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/UserDetails");

    
  });

  it('Click on UserHistory Button',() =>{

    loginPage.navigateTo();
    loginPage.setEmail('anik@gmail.com');
    loginPage.setPassword('Anik1234@');
    loginPage.clickLogin();
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Wellcome");
    alertDialog.accept();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/News");
    newsPage.clickUserNewsHistoryDetails().click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/UserNewsHistory");
    
    
  });
  it('search using search bar when no news displayed',() =>{

    loginPage.navigateTo();
    loginPage.setEmail('anik@gmail.com');
    loginPage.setPassword('Anik1234@');
    loginPage.clickLogin();
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Wellcome");
    alertDialog.accept();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/News");
    newsPage.setNewsValue("porkistan");
    newsPage.clicksearchButton().click();
    var timeoutInMilliseconds = 2000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Invalid Request");
    alertDialog.accept();
   
    
  });
  fit('search using search bar when news will display',() =>{

    loginPage.navigateTo();
    loginPage.setEmail('anik@gmail.com');
    loginPage.setPassword('Anik1234@');
    loginPage.clickLogin();
    var timeoutInMilliseconds = 3000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Wellcome");
    alertDialog.accept();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/News");
 
    newsPage.setNewsValue("modi");
    newsPage.clicksearchButton().click();
    // expect(newsPage.getNewsStatus().isDisplayed()).toEqual(false);
    expect(newsPage.getNewsStatus().getText()).toEqual("True");
    
  });
});