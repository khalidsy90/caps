"use strict";
const done=require('../handlers/done');
const events = require("../hub");
const faker = require("faker");


  setTimeout(() => {
    let payload = {
      store: faker.company.companyName(),
      orderId: faker.datatype.uuid(),
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
  
    events.emit("pickup", payload);
    
  }, 2000);


events.on('done',done)