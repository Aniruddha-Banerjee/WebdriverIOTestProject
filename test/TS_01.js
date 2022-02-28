var wdio = require("webdriverio");
var allureReporter = require("@wdio/allure-reporter").default;
var assert = require("assert");
describe("Test cases for EriBank", () => {
  it("TC_01_Sign In To The Account", () => {
    allureReporter.addDescription(
      "User should be able to login to the account and verify the home page"
    );
    driver.pause(5000); //wait time have been given in mili seconds which means we are waiting for 5
    secondsusername = $("(//android.widget.EditText)[1]"); //$ locator is equals to findelement functionusername.setValue('company'); //type user name
    secondsusername.setValue("Test1234")
    pwd = $("(//android.widget.EditText)[2]");
    pwd.setValue("company"); //type password
    loginButton = $("//android.widget.Button[@text='Log ind']"); //element captured from text
    loginButton.click(); //click on login button
    driver.pause(5000); //wait time have been given in mili seconds. here we are waiting for 5 seconds
    // verifyHomePage = $(
    //   '//android.view.View[contains(@text,"Your balance is")]'
    // ); //element captured from partial text
    // actualText = verifyHomePage.getText(); //get element textexpectedText = 'Your balance is: 100.00$'; // this is the expected value need to be in homepage
    // var expectedText="";
    // assert.equal(actualText, expectedText); // compare expected value and actula value
    // secondsusername = $("//android.widget.EditText[@text='Username']"); //$ locator is equals to findelement functionusername.setValue('company'); //type user name
    // pwd = $("//android.widget.EditText[@text='Password']");
    // pwd.setValue("company"); //type password
    // loginButton = $("//android.widget.Button[@text='Login']"); //element captured from text
    // loginButton.click(); //click on login button
    // driver.pause(5000); //wait time have been given in mili seconds. here we are waiting for 5 seconds
    // verifyHomePage = $(
    //   '//android.view.View[contains(@text,"Your balance is")]'
    // ); //element captured from partial text
    // actualText = verifyHomePage.getText(); //get element textexpectedText = 'Your balance is: 100.00$'; // this is the expected value need to be in homepage
    // var expectedText="";
    // assert.equal(actualText, expectedText); // compare expected value and actula value
  });
});
