const { ACTION_TYPE } = require('./action');

function displaySizeReducer(displaySize = {}, action = {}) {
  switch (action.type) {
    case ACTION_TYPE.SET_DISPLAY_SIZE:
      return action.payload.displaySize;
    default:
      return displaySize;
  }
}

export default displaySizeReducer;
