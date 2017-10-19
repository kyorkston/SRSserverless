'use strict'

const http = require('http')
// grab user id and voucher id from CRM
// post to voucher service with data
// another lambda to communicate with the services?


// const options = {
//   host: 'localhost',
//   path: '/path'
// }

// var res = { "user_id": "12", "voucher_id": "177" }

// http.get(options, (response) => {
//   res = response.getBody()
// })

module.exports.get = (event, context, callback) => {

  // NB: no input for event data, therefore no event object

  const response = {
    statusCode: 200,
    VAR_1: process.env.VAR_1,
    body: JSON.stringify({
      message: `Grabbing userId: ${event.user_id} from API.`,
      input: event,
    }),
  }
  /* use callback for logging and then separate lambda to post?
  add logging into post func?
  add logging into get func?
  */
  callback = (userId ,voucherId) => {
    console.log(`User id ${userId} receiving voucher id ${voucherId}.`)
  }

  callback(event.user_id, event.voucher_id)
}

module.exports.post = (event, context, callback) => {
  console.log(event.user_id)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Posting userId: ${event.user_id} to voucher service.`,
      input: event.user_id,
    }),
  }

  callback(null, response)
}
