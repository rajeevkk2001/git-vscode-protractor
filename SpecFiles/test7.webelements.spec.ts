import { browser, WebElement, element, by } from "protractor";


browser.ignoreSynchronization=true
describe("WebElement example",()=>{
  beforeAll(() => {
    console.log("Before All.. one per describe block")    
  });

  afterAll(() => {
    console.log("After All... one per describe block")    
  });
   beforeEach (()=>{
     browser.get("https://google.com")
     console.log("Before each it Block")   
   })


   afterEach (()=>{
    console.log("After each it block")
       
  })
   it ("web Element Testing", ()=>{
     element(by.xpath("//input[@id='q']")).sendKeys("Hello")
      console.log("web Element Testing")
   })

    it ("get attribute",()=>{
        element(by.xpath("//input[@title='Search']")).getAttribute("maxlength").then(function(attr_Maxlenattr){
         console.log(" Maxlength is " + attr_Maxlenattr)

        })
    })

    it ("get CSS value",()=>{
        
        element(by.xpath("//input[@title='Search']")).getCssValue("font-family").then(function(fontFamily){
         console.log(" Font Family is " + fontFamily)

        })
     /// getTextMethod also

    })
     it ("get Value in a field",()=>{
        browser.element(by.xpath("//input[@title='Search']")).sendKeys("Hello")
        browser.sleep(1000)
        browser.element(by.xpath("//input[@title='Search']")).getAttribute("value").then(function(fieldValue){
         console.log(" Field value is " + fieldValue)

        })
     /// getTextMethod also
        })
   // isDisplayed
   //isPresent
   //isEnabled
   //isDiabled
   it ("get Value in a field",()=>{
       element.all(by.tagName("a")).getWebElements().then(function(elmtArray){
         for (let i=0 ; i<elmtArray.length;i++){
             
            console.log(" all elements")
             
         }

       })

    })
})
