

var wait = require("../../files/helpers/wait");

var header = function () {

    // Selectors
    var logIn = element(by.css('.log-box'));
    var profileBox = element(by.css('.profile-box'));
    var userDropdownButton = element(by.css('[nc-dropdown-trigger="statusOpened"]'));
    var viewProfile = element(by.css('[ui-sref="user.profile"]'));
    var logOut = element(by.css('.drop-button'));

    // Functions
    this.clickUserDropdown = function() {
        userDropdownButton.click();
        return this;
    };
    this.clickLogIn = function() {
        logIn.click();
    };
    this.clickLogOut = function() {
        wait.waitForElementPresense(logOut, 5000);
        logOut.click();
        return this;
    };
    this.clickViewProfile = function() {
        wait.waitForElementPresense(viewProfile, 5000);
        viewProfile.click();
        return this;
    };

    // Verification
    this.isAuthorized = function(email) {
        expect(profileBox.getText()).toEqual(email);
        return this;
    };
    this.isLogOut = function(email) {
        expect(logIn.getText()).toEqual('LOG IN');
        return this;
    };
};

module.exports = new header();