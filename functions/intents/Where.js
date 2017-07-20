const lib = require('lib');


let rooms = {
  "lone star": "the smaller board room up front on the first floor",
  "texas": "the big conference room up front on the first floor",
  "fredericksburg": "the room behind the reception area on the first floor",
  "spicewood": "the room by the stairs on the first floor",
  "zilker park": "the small one on one room on the first floor",
  "barton springs": "the small one on one room on the first floor",
  "capitol": "the small one on one room on the second floor",
  "pennybacker": "The room by finance on the third floor",
  "lake travis": "The room outside the mens bathroom on the third floor",
  "new braunfels": "the room in the center of the building on the first floor",
  "austin": "the room in the center of the building on the second floor",
  "round rock": "the room in the center of the building on the third floor"
};

function getConferenceRoom(room) {
  let found = rooms[room.toLowerCase()];
	if (found) {
  	return found;
  }
  return `I don't know room ${room}`;
}

/**
* Basic "Hello World" intent, can receive a `conferenceRoom` parameter
* @param {string} conferenceRoom Your conferenceRoom
* @returns {string}
*/
module.exports = (conferenceRoom = "I don't know", callback) => {

  let message = getConferenceRoom(conferenceRoom);
  return callback(null, message);

};
