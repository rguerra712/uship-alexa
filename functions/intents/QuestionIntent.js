const lib = require('lib');
const rivership = require('rivership-functions');

/**
 * Basic "Where" intent, can receive a `question` parameter
 * @param {string} question Your question to see where it/he/she is
 * @returns {string}
 */
module.exports = (question = "I don't know", callback) => {
    return rivership.whereIs(question)
        .then(result => callback(null, result))
        .catch(error => "I'm not sure");
};