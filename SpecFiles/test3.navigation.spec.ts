import { browser } from "protractor";

describe("Launch Browser",()=>{

   it('Navigate to Method ',()=>{
     console.log("Before Opening Angular")
     browser.get(browser.params.urlAngular)
     browser.manage().timeouts().implicitlyWait(30000)
     browser.manage().timeouts().pageLoadTimeout(5000)
     browser.manage().window().maximize()

     console.log("After Opening Angular")
     expect(1).toBe(1)
     browser.sleep(3000)
     console.log("Before Opening google")
     browser.navigate().to(browser.params.urlGoogle)
     console.log("after Opening google")
     browser.sleep(3000)
     browser.navigate().back()
     browser.sleep(3000)

     browser.navigate().forward()
     browser.sleep(3000)

     //browser.refresh()

   })

  }

)