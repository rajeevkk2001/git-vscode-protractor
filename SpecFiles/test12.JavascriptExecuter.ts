import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
describe('Protractor Typescript Demo', function() {
    browser.ignoreSynchronization = true; // for non-angular websites
    	// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// navigate to the url
		browser.get("https://google.com");
	it('Javascript executions', function() {
	
		// find the element and set value
         browser.executeScript("return document.title").then(function(title){
            console.log(" Title is "+title)
        })

                
    });
    
it ("URL with Javascript Executor ",()=>{
    browser.executeScript("return document.URL").then(function(url){
        console.log(" URL is "+url)
    })
})

it (" Webpage loaded or not using Javascript Executor",()=>{
    browser.executeScript("return document.readyState").then(function(webPageStatus){
        console.log(" Status of the webpage  is "+webPageStatus)
    })
})



it (" Domain Name with Javascript Executor",()=>{
    browser.executeScript("return document.domain").then(function(domain){
        console.log(" Domain Name is  "+domain)
    })
})



it (" Zoom Levels with Javascript Executor",()=>{
    browser.executeScript("return document.body.style.zoom").then(function(zoomlevel){
     //   console.log(" Zoom level is  "+zoomlevel)
     browser.close
     browser.quit
    })
})

it (" Highlight with Javascript Executor",()=>{
    browser.get("https://google.com");
        browser.sleep(2000)
        element(by.id("q")).sendKeys("Hello")
        browser.sleep(2000)
        browser.executeScript("document.getElementById('lst-ib').style.backgroundColor='red'")
   
})


});