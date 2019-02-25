
import { browser } from "protractor";
describe("Launch Browser",()=>{

    it('Get Window size-- height and width ',()=>{
      browser.get("https://angular.io")
      expect(1).toBe(1)
      browser.sleep(5000)
      browser.manage().window().getSize().then(function(size){
          console.log("Height is "+size.height)
          console.log("Width is " +size.width)
        })
      browser.manage().window().maximize();
      
      browser.manage().window().getSize().then(function(size){
        console.log("Height is "+size.height)
        console.log("Width is " +size.width)
      })
    })    
})  