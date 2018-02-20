/**
 * Created by oleg.dubrovsky on 2/16/2018.
 */

var login = function() {

    this.getEmail = function() {
        return 'ssls.automation+5@gmail.com';
    };
    this.getPassword = function() {
        return '123456';
    };
    this.getNotRegisteredEmail = function() {
        return 'omation@gmail.com';
    };
    this.getInvalidEmail = function() {
        return 'eg. test@@test.com';
    };
};

module.exports = new login();
