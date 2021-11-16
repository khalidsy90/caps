"use strict";
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
}, 3500);
}

module.exports = delivered;
