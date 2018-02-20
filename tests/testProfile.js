
var authorizationPage = require("../src/pages/authorizationPage"),
    loginTestData = require("../files/testData/login"),
    header = require("../src/pages/header"),
    profile = require("../src/pages/profilePage"),
    preconditionValues,
    newValues,
    supportPin,
    updatedSupportPin;

describe("My profile", function () {

    beforeEach(function () {
        authorizationPage.get()
            .setEmail(loginTestData.getEmail())
            .setPassword(loginTestData.getPassword())
            .clickLogin();
        header.clickUserDropdown()
            .clickViewProfile();
    });

    it("My profile page. Client area", function () {
        //After click on "View profile" opened page "Profile" should be displayed
        profile.isPageDisplayed()
            .getUser().then(function(data){
                preconditionValues = data;
            });
        header.clickUserDropdown()
            .clickLogOut();
        authorizationPage.get()
            .setEmail(loginTestData.getEmail())
            .setPassword(loginTestData.getPassword())
            .clickLogin();
        header.clickUserDropdown()
            .clickViewProfile();
        profile.getUser().then(function(data){
            newValues = data;
            //Check that opened page has to contain values in the next fields and compare with values from precondition
            profile.compareUserData(preconditionValues, newValues);
        });
    });

    it("My profile page. Refresh support pin", function () {
        profile.getSupportPin().then(function(data){
            supportPin = data;
        });
        profile.clickSupportPinUpdate();
        profile.getSupportPin().then(function(data){
            updatedSupportPin = data;
            profile.isSupportPinUpdated(supportPin, updatedSupportPin);
        });
    });

    afterEach(function () {
        header.clickUserDropdown()
            .clickLogOut();
    });
});