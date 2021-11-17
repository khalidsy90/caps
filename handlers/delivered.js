"use strict";
function delivered(payload) {
  console.log(`==========================================================\n`);
  // console.log(`DRIVER: delivered up ${payload.orderId}`);
  let date = new Date();
  let deliveredEvent = {
    event: "delivered",
    time: date.toISOString(),
    payload: payload,
  };
  console.log("EVENT", deliveredEvent);
}

module.exports = delivered;
