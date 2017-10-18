'use strict';

const logging = (arg) => {
  console.log(`User id ${arg} receiving reward.`);
}

module.exports.get = (event, context, callback) => {

  // NB: no input for event data, therefore no event object
  console.log(event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Grabbing userId: ${event.user_id} from API.`,
      input: event,
    }),
  };

  /* use callback for logging and then separate lambda to post?
  add logging into post func?
  add logging into get func?
  */

  callback(logging(), event.user_id);
};

module.exports.post = (event, context, callback) => {
  console.log(event.user_id);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Posting userId: ${event.user_id} to voucher service.`,
      input: event.user_id,
    }),
  };

  callback(null, response);
};
