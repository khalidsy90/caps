"use strict";
const events=require('../hub')
function delivered(payload) {
setTimeout(() => {
  console.log(`==========================================================\n`);
  console.log(`DRIVER: delivered up ${payload.orderId}`);
  let date = new Date();
  let deliveredEvent = {
    event: "delivered",
    time: date.toISOString(),
    payload: payload,
  };
  console.log("EVENT", deliveredEvent);
  events.emit('done',payload)
}, 2000);
}

module.exports = delivered;
