
var wait = function () {
    this.waitWhileElementBeClicable = function (element, timeouts) {
        var ec = protractor.ExpectedConditions.elementToBeClickable(element);
        browser.wait(ec, timeouts);
    };
    this.waitForElementPresense = function (element, timeout) {
        var ec = protractor.ExpectedConditions.presenceOf(element);
        browser.wait(ec, timeout);
    };
    this.waitForElementInvisibility= function (element, timeout) {
        var ec = protractor.ExpectedConditions.visibilityOf(element);
        browser.wait(protractor.ExpectedConditions.not(ec), timeout);
    };

    this.waitForElementVisibility = function (element, timeouts) {
        var ec = protractor.ExpectedConditions.visibilityOf(element);
        browser.wait(ec, timeouts);
    }
};

module.exports = new wait();