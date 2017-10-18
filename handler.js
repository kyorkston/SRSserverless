'use strict';

const postDataToVouchers = (arg) => {
  console.log(arg);
}

module.exports.getDataFromAPI = (event, context, callback) => {

  // NB: no input for event data, therefore no event object
  console.log(event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Grabbing userId: ${event.user_id} from API.`,
      input: event,
    }),
  };

  callback(postDataToVouchers(), event.user_id);

};
