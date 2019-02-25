import { browser } from "protractor"

describe("Launch Browser",()=>{

   it('should be a title ',()=>{
     browser.get("https://angular.io")
     expect(1).toBe(1)

     
   })

   it('get the url',()=>{
    browser.getCurrentUrl().then(function(currentURL){
      console.log("Current URL is "+currentURL)
    })
       
   })
    it ('get title by resolving the promise',()=>{
      browser.getTitle().then(function(title){
        console.log("Reolved the title using then block and title is "+title)
      })
    })

    it('get page source',()=>{
      browser.getPageSource().then(function(pageSoruce){
        console.log("Page Source is "+pageSoruce)
      })
    })

})