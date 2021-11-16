"use strict";
function inTransit(payload) {
setTimeout(() => {
  console.log(`==========================================================\n`);
  console.log(`DRIVER: in transite ${payload.orderId}`);
    let date = new Date();
    let inTRansitEvent = {
      event: "in-transit",
      time: date.toISOString(),
      payload: payload,
    };
    console.log("EVENT", inTRansitEvent);
  }, 3000);
}

module.exports = inTransit;
