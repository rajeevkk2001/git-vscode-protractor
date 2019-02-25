//var HtmlReporter = require('protractor-html-screenshot-reporter')

import {Config, browser} from "protractor"
var HtmlReporter = require('protractor-beautiful-reporter');
var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
    

declare const allure: any;
exports.config = {
    framework: 'jasmine2',
    specs: ['*.js'],

    params:{
      urlAngular: "https://angular.io",
      urlGoogle:"https://google.com"
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {'args': ['disable-infobars']}
      },
      seleniumAddress: 'http://localhost:4444/wd/hub',


     
    onPrepare: function() {
      console.log(" On Prepare method")
      browser.ignoreSynchronization =true
      browser.manage().window().maximize();

      var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  /*  jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
   }).getJasmine2Reporter());

   var reporter = new HtmlReporter({
    baseDirectory: 'tmp/screenshots'
 });*/



      
      jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
        screenshotOnFail :true,
		    reportName:'TestReport',
		    showSkipped:true,
		    showLineChart:true
      }));

      
      //https://chercher.tech/protractor/chercher-tech-jasmine-reporter
      
    },

    onComplete: function(){
        console.log("On completion message")
    }
}