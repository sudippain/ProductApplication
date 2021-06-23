import { browser, element, by} from 'protractor';

export class NewsPage{
    constructor(){

    }
    navigateTo(){
            return browser.get('/News');
    }
    getPageTitleText(){
        return element(by.css('h1'));
    }
    clickUserDetails(){
        return element(by.id('userdetails'));
    }
    clickUserNewsHistoryDetails(){
        return element(by.id('usernewshistory'));
    }
    clicksearchButton(){
          return element(by.id('searchButton'));
    }
    setNewsValue(searchNews:string){
        element(by.id('searchValue')).clear();
        element(by.id('searchValue')).sendKeys(searchNews);
    }
    getNewsStatus(){
        return element(by.css('p'));
    }
    
    clickLogoutButton(){
        return element(by.css('.btn-danger')).click();
    }

}