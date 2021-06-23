
import { by, element } from 'protractor';

export class userNewsHistory{
    constructor(){

    }
   getTable(){
       return element(by.css('table'));
   }
   getbutton(){
       return element(by.id('remove'));
   }
  
}