const lib = require('lib');
const rivership = require('rivership-functions');

/**
 * Basic "Lunch" for lunch intent for today
 * @returns {string}
 */
module.exports = (callback) => {
    return rivership.whatIsLunch()
        .then(result => callback(null, result))
        .catch(error => "I'm not sure");
};