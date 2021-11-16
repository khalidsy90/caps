"use strict";
require('dotenv').config()

const PORT=process.env.PORT || 3000

const caps=require('socket.io')(PORT)

const capsSystem=caps.of('/capsSystem')

const pick_upHandler=require('./handlers/pickup')
const inTransitHandler=require('./handlers/inTransit')
const deliveredHandler=require('./handlers/delivered')

caps.on('connection',(sockit) => {
console.log('caps hub is connected' ,sockit.id);

})

capsSystem.on('connection',(sockit)=>{
  console.log("capsSystem is connected",sockit.id);
  sockit.on("pickup",(paylaod)=>{
      pick_upHandler(paylaod)
      capsSystem.emit('pickup',paylaod)
  })
  sockit.on("in-transit", (payload) => {
      inTransitHandler(payload);
      capsSystem.emit("delivered", payload);
    });            
  sockit.on("delivered", (payload) => {
      deliveredHandler(payload);
  })

})    
