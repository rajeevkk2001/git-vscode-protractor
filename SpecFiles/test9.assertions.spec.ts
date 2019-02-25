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
   it ("Assertions", ()=>{
     expect("actual").toBe("expected") //used with integer
     let abc
     expect(abc).toBeUndefined()

     expect("act").not.toBe("act1")

      console.log("web Element Testing")
let k = "23"
expect(parseInt(k)).toBeNaN()
expect("test").toBeNaN()

   })

})