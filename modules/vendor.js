'use strict'
const PORT=process.env.PORT || 3000
const io=require('socket.io-client')
const host =`http://localhost:${PORT}`
const capsSystem=io.connect(`${host}/capsSystem`)

const faker= require('faker')
let payload = {
  store: faker.company.companyName(),
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: faker.address.streetAddress(),
};

capsSystem.emit('pickup',payload)

capsSystem.on('delivered',(payload)=>{
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
  capsSystem.emit('delivered',payload)
})