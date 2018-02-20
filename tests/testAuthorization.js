/**
 * Created by oleg.dubrovsky on 2/16/2018.
 */

var authorizationPage = require("../src/pages/authorizationPage"),
    loginTestData = require("../files/testData/login"),
    errorMessage = require("../files/resources/strings"),
    header = require("../src/pages/header"),
    homePage = require("../src/pages/homePage");

describe("Authorization", function () {

    beforeEach(function () {
        homePage.get()
        //Home page has to be opened
            .isPageDisplayed();
        header.clickLogIn();
    });

    it("Authorization page (Welcome back!)", function () {
        //Authorization page has to be opened
        authorizationPage.isPageDisplayed()
            .setEmail(loginTestData.getEmail())
            .setPassword(loginTestData.getPassword())
            .clickShowPassword()
            //After click on "eye" icon for password field, password should be displayed
            .isPasswordCorrect()
            .clickShowPassword()
            .clickLogin();
        homePage.isPageDisplayed();
        //"Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page
        header.isAuthorized(loginTestData.getEmail())
            .clickUserDropdown()
            .clickLogOut();
    });

    it("Authorization page. Not registered user", function () {
        authorizationPage.setEmail(loginTestData.getNotRegisteredEmail())
            .setPassword(loginTestData.getPassword())
            .clickLogin()
            .isNotificationDisplayed(errorMessage.getNotRegistered());
    });

    it("Authorization page. Invalid email", function () {
        authorizationPage.setEmail(loginTestData.getInvalidEmail())
            .setPassword(loginTestData.getPassword())
            .clickLogin()
            .isEmailValid(errorMessage.getInvalidEmail());
    });

    it("Authorization page. Empty fields", function () {
        authorizationPage.clickLogin()
            .isEmailRequired(errorMessage.getEmailRequired())
            .isPasswordRequired(errorMessage.getPasswordRequired());
    });

    it("Log Out.", function () {
        authorizationPage.isPageDisplayed()
            .setEmail(loginTestData.getEmail())
            .setPassword(loginTestData.getPassword())
            .clickLogin();
        header.clickUserDropdown()
                .clickLogOut();
        authorizationPage.isPageDisplayed();
        header.isLogOut();
    });
});
