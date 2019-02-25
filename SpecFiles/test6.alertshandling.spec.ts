import { browser, element, by } from "protractor";
import{HandleAlert} from "../POM/util/alert-handler"

describe("Launch Browser",()=>{

//global home
browser.ignoreSynchronization=true
    it('Handling Alert 3',()=>{
    // browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
    // browser.sleep(4000)
    // element(by.name("alert")).click()
     //browser.sleep(4000)
    // HandleAlert.acceptAlert()
   })

   it('Handling Alert 4',()=>{
    //browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
    //browser.sleep(4000)
   // element(by.name("prompt")).click()
    //browser.sleep(4000)
    //browser.switchTo().alert().getText().then(function(alertText){
    // let  alertText = HandleAlert.getTextFromAlert()
     //   console.log(alertText)
    //    HandleAlert.dismissAlert()
    });// accept/dismiss/authenticate etc
  })
