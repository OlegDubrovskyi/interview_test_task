
var homePage = function () {

    // Selectors
    var banner = element(by.css('.ev-promo-banner.ng-scope'));
    var personalFilter = (element.all(by.css('.filter-row>.filter-item'))).get(0);
    var businessFilter = (element.all(by.css('.filter-row>.filter-item'))).get(1);
    var ecommerceFilter = (element.all(by.css('.filter-row>.filter-item'))).get(2);
    var oneDomainFilter = (element.all(by.css('.filter-row>.filter-item'))).get(3);
    var multiDomainFilter = (element.all(by.css('.filter-row>.filter-item'))).get(4);
    var subdomainsFilter = (element.all(by.css('.filter-row>.filter-item'))).get(5);
    var sslTitle = element.all(by.css('.ssl-title>.ssl-name'));
    var domain = element.all(by.css('.desc-box>.text:nth-of-type(2)'));
    var price =  element.all(by.css('.lg-price>.price'));
    var sortButton = element(by.css('.sort-btn'));
    var rating = element.all(by.css('.rating'));

    // Functions
    this.get = function () {
         browser.get('/');
         return this;
    };

    this.clickPersonalFilter = function() {
        personalFilter.click();
        return this;
    };

    this.clickBusinessFilter = function() {
        businessFilter.click();
        return this;
    };

    this.clickEcommerceFilterr = function() {
        ecommerceFilter.click();
        return this;
    };

    this.clickOneDomainFilter = function() {
        oneDomainFilter.click();
        return this;
    };

    this.clickMultiDomainFilter = function() {
        multiDomainFilter.click();
        return this;
    };

    this.clickSubdomainsFilter = function() {
        subdomainsFilter.click();
        return this;
    };

    this.clickSortButton = function() {
        sortButton.click();
        return this;
    };

    this.getTilesByDomain = function(ssls,typeOfDomen) {
        let domains = [];
        let sslsFiltered = [];
        return new Promise(function (resolve) {
            domain.then(function (elems) {
                for (let i = 0; i < elems.length; i++) {
                    domain.get(i).getText().then(function (text) {
                        domains[i] = text;
                    });
                }
                protractor.promise.controlFlow()
                    .execute(function () {
                        return protractor.promise.fulfilled()
                    }, 'wait for control flow')
                    .then(function () {
                        for(let i = 0; i <= domains.length; i++ ){
                            if(domains[i] === typeOfDomen){
                                sslsFiltered.push(ssls[i]);
                            }
                            resolve(sslsFiltered);
                        }
                    });
            });
        });
    };

    this.getSslTitles = function() {
        let ssls = [];
        return new Promise(function (resolve) {
        sslTitle.then(function (elems) {
                for (let i = 0; i < elems.length; i++) {
                    sslTitle.get(i).getText().then(function (text) {
                        ssls[i] = text;
                    });
                }
            protractor.promise.controlFlow()
                .execute(function () {
                    return protractor.promise.fulfilled()
                }, 'wait for control flow')
                .then(function () {
                    resolve(ssls);
                });
            });
        });
    };

    this.getPrices = function() {
        let priceArr = [];
        let regex = new RegExp(/([0-9]*\.[0-9]+)/,'g');
        return new Promise(function (resolve) {
            price.then(function (elems) {
                for (let i = 0; i < elems.length; i++) {
                    price.get(i).getText().then(function (text) {
                        priceArr[i] = text.match(regex);
                    });
                }
                protractor.promise.controlFlow()
                    .execute(function () {
                        return protractor.promise.fulfilled()
                    }, 'wait for control flow')
                    .then(function () {
                        resolve(priceArr);
                    });
            });
        });
    };

    this.getRatings = function() {
        let ratingArr = [];
        let regex = new RegExp(/([0-9]*\_[0-9]+)/,'g');
        return new Promise(function (resolve) {
            rating.then(function (elems) {
                for (let i = 0; i < elems.length; i++) {
                    rating.get(i).getAttribute('class').then(function (classes) {
                        ratingArr[i] = classes.match(regex);
                        ratingArr[i] = ratingArr[i].toString().replace('_', ".");
                    });
                }
                protractor.promise.controlFlow()
                    .execute(function () {
                        return protractor.promise.fulfilled()
                    }, 'wait for control flow')
                    .then(function () {
                        resolve(ratingArr);
                    });
            });
        });
    };

    // Verification
    this.isPageDisplayed = function() {
        expect(banner.isDisplayed()).toBe(true);
        return this;
    };

    this.isListFiltered = function(predefinedFilters, filters) {
        for(let i = 0; i<filters.length; i++){
            expect(filters[i]).toEqual(predefinedFilters[i]);
        }
        expect(filters.length).toEqual(predefinedFilters.length);
    };

    this.checkSortingByPrice = function(arr) {
        for(let i = 0; i<arr.length-1; i++) {
            expect(+arr[i] <= +arr[i + 1]).toBe(true);
            }
        };

    this.checkSortingByRating = function(arr) {
        for(let i = 0; i<arr.length-1; i++) {
            expect(+arr[i] >= +arr[i + 1]).toBe(true);
        }
    };
};

module.exports = new homePage();