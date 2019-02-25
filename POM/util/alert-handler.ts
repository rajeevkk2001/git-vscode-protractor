import {browser} from "protractor"
export class HandleAlert{
    public static acceptAlert(){
        browser.switchTo().alert().accept();
    }

    public static getTextFromAlert(){
        return browser.switchTo().alert().getText()
    }
    public static dismissAlert(){
        browser.switchTo().alert().dismiss()
    }
}