var wdio = require("webdriverio");
var allureReporter = require("@wdio/allure-reporter").default;
var assert = require("assert");
describe("Test cases for EriBank", async() => {
  it("TC_01_Sign In To The Account", async() => {
    let username = await $("(//android.widget.EditText)[1]");
    await username.click();
    await username.setValue("Tester2021");
    await driver.pause(2000);
    let password = await $("(//android.widget.EditText)[2]");
    await password.click();
    await password.setValue("Test123456");
    await driver.pause(2000);
    let loginButton = await $("//android.widget.TextView[@text='Login']");
    await loginButton.click();
    await driver.pause(2000);
    await loginButton.click();
    let button1 = await $("//android.widget.TextView[@text='1']");
    for(let i=1;i<5;i++){
      await button1.click();
      await driver.pause(1000);
    }
    await driver.pause(4000);
    for(let i=1;i<5;i++){
      await button1.click();
      await driver.pause(1000);
    }
    await driver.pause(4000);
    let homeScreen = await $("//android.view.View[@text='HomeScreen']");
    let isDisplayed = await homeScreen.isDisplayed();
    console.log(isDisplayed);
  });
});
