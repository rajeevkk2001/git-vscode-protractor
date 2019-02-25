import { browser, element, by } from "protractor";

describe("Launch Browser",()=>{

   it('should be a title ',()=>{
     browser.get("https://angular.io")
     expect(1).toBe(1)
     // CSS selectors
     // class indicated by #
     //Id indicated by .
     //tagname... nothinh just the tagname
     //attributes []
     //by.css['title='search']

   })

     
   })