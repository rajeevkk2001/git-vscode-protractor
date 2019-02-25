import { browser, element, by } from "protractor";

describe("Launch Browser",()=>{


browser.ignoreSynchronization=true
    it('Handling Alert 1',()=>{
     browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
    // browser.sleep(2000)
   //// element(by.name("alert")).click()
    // browser.sleep(4000)
   //browser.switchTo().alert().accept();// accept/dismiss/authenticate etc
   })

   it('Handling Alert 2',()=>{
    //browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
   // browser.sleep(2000)
    //element(by.name("prompt")).click()
    //browser.sleep(2000)
    //browser.switchTo().alert().getText().then(function(alertText){
       
   //     console.log(alertText)
    //    browser.switchTo().alert().accept()
  //  });// accept/dismiss/authenticate etc */
  })


   })
