var wait = require("../../files/helpers/wait"),
    User = require("../../src/models/user");

var profilePage = function () {

    // Selectors
    var name = element(by.css('.description>[ng-hide="activeRow === \'name\'"]'));
    var email = element(by.css('.description>[ng-hide="activeRow === \'email\'"]'));
    var password = element(by.css('.description>[ng-hide="activeRow === \'password\'"]'));
    var phone = element(by.css('.description>[ng-hide="activeRow === \'phone\'"]'));
    var address = element(by.css('.description>[ng-hide="activeRow === \'address\'"]'));
    var supportPin = element(by.css('[ng-class*="pin"]>.description>.text'));
    var supportPinUpdate = element(by.css('[name="supportPin"]'));
    var newsletter = element(by.css('.toggle-btn.on'));
    var pageTitle = element(by.css('.profile-page .page-title'));


    // Functions
    this.getName = function () {
        return new Promise(function (resolve) {
            name.getText().then(function (text) {
                resolve(text);
            });
        });
    };

    this.getEmail = function () {
        return new Promise(function (resolve) {
            email.getText().then(function (text) {
                resolve(text);
            });
        });
    };
    this.getPassword = function () {
        return new Promise(function (resolve) {
            password.getText().then(function (text) {
                resolve(text);
            });
        });
    };
    this.getPhone = function () {
        return new Promise(function (resolve) {
            phone.getText().then(function (text) {
                resolve(text);
            });
        });
    };
    this.getAddress = function () {
        return new Promise(function (resolve) {
            address.getText().then(function (text) {
                resolve(text);
            });
        });
    };
    this.getSupportPin = function () {
        return new Promise(function (resolve) {
            supportPin.getText().then(function (text) {
                resolve(text);
            });
        });
    };
    this.clickSupportPinUpdate = function() {
        supportPinUpdate.click();
        return this;
    };

    //user
    this.getUser = function () {
        let user = new User();
        let context = this;
        return new Promise(function (resolve) {
            context.getName().then(function (data) {
                user.setName(data);
            });
            context.getEmail().then(function (data) {
                user.setEmail(data);
            });
            context.getPassword().then(function (data) {
                user.setPassword(data);
            });
            context.getPhone().then(function (data) {
                user.setPhone(data);
            });
            context.getAddress().then(function (data) {
                user.setAddress(data);
            });
            context.getSupportPin().then(function (data) {
                user.setSupportPin(data);
            });
            newsletter.isDisplayed().then(function (visible) {
                if (visible) {
                    user.setNewsletter('on');
                }
            }, function (err) {
                user.setNewsletter('off');
            });
            protractor.promise.controlFlow()
                .execute(function () {
                    return protractor.promise.fulfilled()
                }, 'wait for control flow')
                .then(function () {
                    resolve(JSON.stringify(user));
                });
        });
    };

    // Verification
    this.isPageDisplayed = function() {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toEqual(browser.baseUrl+'/user/profile');
        });
        expect(pageTitle.isDisplayed()).toBe(true);
        return this;
    };
    this.compareUserData  = function(userDataA, userDataB) {
        let parseDataA = JSON.parse(userDataA);
        let parseDataB = JSON.parse(userDataB);
        expect(parseDataB['name']).toEqual(parseDataA['name']);
        expect(parseDataB['email']).toEqual(parseDataA['email']);
        expect(parseDataB['password']).toEqual(parseDataA['password']);
        expect(parseDataB['password']).not.toEqual('');
        expect(parseDataA['password']).not.toEqual('');
        expect(parseDataB['phone']).toEqual(parseDataA['phone']);
        expect(parseDataB['address']).toEqual(parseDataA['address']);
        expect(parseDataB['supportPin']).toEqual(parseDataA['supportPin']);
        expect(parseDataB['newsletter']).toEqual(parseDataA['newsletter']);
    };
    this.isSupportPinUpdated = function(valueA, valueB) {
        expect(valueA).not.toEqual(valueB);
    };
};

module.exports = new profilePage();