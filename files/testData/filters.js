
var filters = function() {

    this.getPersonalFilters = function() {
        return ['PositiveSSL', 'PositiveSSL Multi-Domain', 'PositiveSSL Wildcard'];
    };
    this.getMultiDomainFilters = function() {
        return ['EV Multi-Domain SSL', 'PositiveSSL Multi-Domain', 'Unified Communications', 'Multi-Domain SSL'];
    };
};

module.exports = new filters();