const lib = require('lib');
const rivership = require('rivership-functions');

/**
 * Basic "What" for lunch intent, can receive a `dayOfWeek` parameter
 * @param {string} dayOfWeek The day of the week to see what is for lunch
 * @returns {string}
 */
module.exports = (dayOfWeek, callback) => {
    return rivership.whatIsLunch(dayOfWeek)
        .then(result => callback(null, result))
        .catch(error => "I'm not sure");
};