
var strings = function() {

    this.getNotRegistered = function() {
        return 'Uh oh! Email or password is incorrect';
    };
    this.getInvalidEmail = function() {
        return 'Uh oh! This\nisn’t an email';
    };
    this.getEmailRequired = function() {
        return 'Oops, please\nenter your email';
    };
    this.getPasswordRequired = function() {
        return 'Looks like you’ve\nmissed this one';
    };
};

module.exports = new strings();