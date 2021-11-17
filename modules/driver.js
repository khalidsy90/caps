"use strict";
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const io = require("socket.io-client");
const host = `http://localhost:${PORT}`;
const capsSystem = io.connect(`${host}/capsSystem`);

const pickupHandler = require("../handlers/pickup.js");

capsSystem.on("pickup-driver", (payload) => {
  console.log(`DRIVER: Picked up ${payload.orderId}`);
  capsSystem.emit("in-transit", payload);
});

capsSystem.on("delivered-driver", (payload) => {
    capsSystem.emit("delivered", payload);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`DRIVER: delivered up ${payload.orderId}`);
      resolve();
    }, 3400);
  })
});
