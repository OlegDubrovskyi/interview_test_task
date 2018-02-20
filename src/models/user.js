
class User{
    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.phone = '';
        this.address = '';
        this.supportPin = '';
        this.newsletter = '';
    }

    setName (name) {
        this.name  = name;
    };

    getName () {
        return this.name;
    };

    setEmail (email) {
        this.email  = email;
    };

    getEmail () {
        return this.email;
    };

    setPassword (password) {
        this.password = password;
    }

    getPassword () {
        return this.password;
    };

    setPhone (phone) {
        this.phone = phone;
    }

    getPhone () {
        return this.phone;
    };

    setAddress (address) {
        this.address  = address;
    };

    getAddress () {
        return this.address;
    };

    setSupportPin (supportPin) {
        this.supportPin  = supportPin;
    };

    getSupportPin () {
        return this.supportPin;
    };

    setNewsletter (newsletter) {
        this.newsletter = newsletter;
    };

    getNewsletter (newsletter) {
        this.newsletter  = newsletter;
    };
}

module.exports = User;