/**
 * Created by oleg.dubrovsky on 2/16/2018.
 */

var wait = require("../../files/helpers/wait");

var authorizationPage = function () {
    // Selectors

    var emailInput =  element(by.css('.email [name="email"]'));
    var passwordInput = element(by.css('.password [name="password"]'));
    var showPassword = element(by.css('[ng-click="showPassword = !showPassword"]'));
    var passwordTypeText = element(by.css('.password>[type="text"]'));
    var loginButton = element(by.css('.primary'));
    var pageTitle = element(by.css('.authorization-page .page-title'));
    var notification = element.all(by.css('.noty_text'));
    var errorInvalidEmail = (element.all(by.css('.tooltip-error'))).get(0);
    var errorRequiredEmail = (element.all(by.css('.tooltip-error'))).get(1);
    var errorRequiredPassword = (element.all(by.css('.tooltip-error'))).get(2);

    // Functions
    this.get = function () {
        browser.get('/authorize');
        return this;
    };
    this.setEmail = function(email) {
        emailInput.sendKeys(email);
        return this;
    };
    this.setPassword = function(password) {
        passwordInput.sendKeys(password);
        return this;
    };
    this.clickLogin = function() {
        wait.waitWhileElementBeClicable(loginButton, 2000);
        loginButton.click();
        return this;
    };
    this.clickShowPassword = function() {
        showPassword.click();
        return this;
    };

    // Verification
    this.isPageDisplayed = function() {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toEqual(browser.baseUrl+'/authorize');
        });
        expect(pageTitle.isDisplayed()).toBe(true);
        return this;
    };
    this.isPasswordCorrect = function() {
        expect(passwordTypeText.isDisplayed()).toBe(true);
        return this;
    };
    this.isNotificationDisplayed = function(value) {
        wait.waitWhileElementBeClicable(notification.get(0), 5000);
        expect(notification.get(0).getText()).toEqual(value);
        return this;
    };
    this.isEmailValid = function(value) {
        wait.waitForElementPresense(errorInvalidEmail, 5000);
        expect(errorInvalidEmail.getText()).toEqual(value);
        return this;
    };
    this.isEmailRequired = function(value) {
        wait.waitForElementPresense(errorRequiredEmail, 5000);
        expect(errorRequiredEmail.getText()).toEqual(value);
        return this;
    };
    this.isPasswordRequired = function(value) {
        wait.waitForElementPresense(errorRequiredPassword, 5000);
        expect(errorRequiredPassword.getText()).toEqual(value);
        return this;
    };
};

module.exports = new authorizationPage();