exports.config = {
    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.9.1.jar',
    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.35',

    baseUrl: 'https://www.ssls.com',

    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'prefs': {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false
                }
            }
        }
    },

    specs: './tests/*.js',
    /*specs: './tests/testAuthorization.js',*/

    framework: 'jasmine',
    allScriptsTimeout: 140000,
    getPageTimeout: 140000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
    },

    onPrepare: function () {
        browser.manage().window().maximize();
    },
};