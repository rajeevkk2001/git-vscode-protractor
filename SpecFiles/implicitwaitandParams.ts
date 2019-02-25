import { browser, WebElement, element, by } from "protractor";


browser.ignoreSynchronization=true
describe("Implicit wait example",()=>{
  beforeAll(() => {
    console.log("Before All.. one per describe block")    
   
	browser.manage().timeouts().implicitlyWait(50000)
  });

  afterAll(() => {
    console.log("After All... one per describe block")    
  });
   beforeEach (()=>{
    
     console.log("Before each it Block")   
    browser.get(browser.params.urlGoogle)
   })

   it( "Implicit wait",()=>{
    console.log("Starting the test") 
    expect(browser.getTitle()).toContain('Google');

    element(browser.getTitle().then(function (title)
     {
      expect(title).toBe('Google');

     }));

    browser.sleep(3000)
    element(by.xpath("//input[@title='Search']")).sendKeys("Hello")
    console.log("Implicit wait is applicable only to element and elementall- one condition")
   })


   afterEach (()=>{
    console.log("After each it block")
       
  })

})