"use strict";
require('dotenv').config()
const PORT=process.env.PORT || 3000
const io=require("socket.io-client")
const host =`http://localhost:${PORT}`
const capsSystem=io.connect(`${host}/capsSystem`)

capsSystem.on('pickup',(payload)=>{
    console.log(`DRIVER: Picked up ${payload.orderId}`);
    capsSystem.emit("in-transit", payload);
})
capsSystem.on('delivered',(payload)=>{
    console.log(`DRIVER: delivered up ${payload.orderId}`);
})