import { LoginPage } from "../loginTest/login.po";
import { NewsPage } from '../NewsComponentTest/news.po';
import { userDetailsPage } from './userDetails.po';
import { browser,protractor } from 'protractor';


describe('Protractor Testing for userDetails', () =>{

    let loginPage:LoginPage;
    let newsPage:NewsPage;
    let userdetailsPage:userDetailsPage;
    beforeEach(() => {
        loginPage=new LoginPage();
        newsPage=new NewsPage();
        userdetailsPage=new userDetailsPage();
    });

    it('if table is Present',() =>{
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
        newsPage.clickUserDetails().click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/UserDetails");
        expect(userdetailsPage.getTable().isPresent());
        
    })
});