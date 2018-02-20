var homePage = require("../src/pages/homePage"),
    filtersData = require("../files/testData/filters"),
    ssls,
    filteredByDomain,
    sslsByDomain,
    prices,
    ratings;

describe("Home page. Filters", function () {

    beforeEach(function () {
        homePage.get()
    });

    it("Verify list of SSL certificates after clicking on “Personal” filter", function () {
        homePage.clickPersonalFilter()
            .getSslTitles().then(function (data) {
            ssls = data;
            homePage.isListFiltered(filtersData.getPersonalFilters(), ssls);
        });
    });

    it("Verify list of SSL certificates after clicking on “Personal” + “Multi-Domain” filter", function () {
        homePage.clickPersonalFilter()
            .getTilesByDomain(ssls, '3-100 domains').then(function (data) {
            filteredByDomain = data;
        });
        homePage.clickMultiDomainFilter()
            .getSslTitles().then(function (data) {
            sslsByDomain = data;
            homePage.isListFiltered(filteredByDomain, sslsByDomain);
        });
    });

    it("Verify that SSL certificates sorted by Featured by default ", function () {
        homePage.clickSortButton()
            .getPrices().then(function (data) {
            prices = data;
            homePage.checkSortingByPrice(prices);
        });
    });

    it("Verify that SSL certificates sorted by Featured by default ", function () {
        homePage.getRatings().then(function (data) {
            ratings = data;
            homePage.checkSortingByRating(ratings);
        });
    });
});