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

      sockit.on("pickup",(payload)=>{
          capsSystem.emit('pickup-driver',payload)
          pick_upHandler(payload)
      })

      sockit.on("in-transit", (payload) => {
          inTransitHandler(payload);
          capsSystem.emit("delivered-driver", payload);
      })

      sockit.on("delivered", (payload) => {
        new Promise((resolve) =>{
          setTimeout(() => {
            deliveredHandler(payload);
            resolve();
          }, 3500);
        }).then(()=>{
          capsSystem.emit('delivered-vendor',payload);
        })
      })

})    

module.exports=capsSystem