
import { by, element } from 'protractor';

export class userDetailsPage{
    constructor(){

    }
   getTable(){
       return element(by.css('table-borderless'));
   }
  
}