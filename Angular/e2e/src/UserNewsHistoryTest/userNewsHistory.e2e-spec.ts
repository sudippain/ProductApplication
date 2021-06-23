import { LoginPage } from "../loginTest/login.po";
import { NewsPage } from '../NewsComponentTest/news.po';

import { browser,protractor } from 'protractor';
import { userNewsHistory } from './userNewsHistory.po';


describe('Protractor Testing for userHistory', () =>{

    let loginPage:LoginPage;
    let newsPage:NewsPage;
    let usernewshistory:userNewsHistory;
    beforeEach(() => {
        loginPage=new LoginPage();
        newsPage=new NewsPage();
        usernewshistory=new userNewsHistory();
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
        newsPage.clickUserNewsHistoryDetails().click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/UserNewsHistory");
        expect(usernewshistory.getTable().isPresent());
        usernewshistory.getbutton().click();
    })
});