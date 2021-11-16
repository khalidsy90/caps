"use strict";

const events = require("../hub");

function pickup(payload) {
  console.log(`==========================================================\n`);
  console.log(`DRIVER: Picked up ${payload.orderId}`);
  let date = new Date();
  let pickupEvent = {
    event: "pickup",
    time: date.toISOString(),
    payload: payload,
  };
  console.log("EVENT", pickupEvent);
  events.emit("in-transit", payload);
}

module.exports = pickup;
