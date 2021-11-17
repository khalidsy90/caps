"use strict";

const faker = require("faker");

const capsSystem = require('../hub');

  let payload = {
    store: faker.company.companyName(),
    orderId: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  describe("Socket.io TESTING", () => {
         let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
     });
      
    it('pickup Work', async () => {
        capsSystem.emit('pickup', payload);
         await consoleSpy();
         expect(consoleSpy).toHaveBeenCalled();
     });

    it('in-transit  Work ', async () => {
         capsSystem.emit('in-transit', payload);
         await consoleSpy();
         expect(consoleSpy).toHaveBeenCalled();
     });

    it('delivered  Work  ', async () => {
      capsSystem.emit('delivered', payload);
         await consoleSpy();
         expect(consoleSpy).toHaveBeenCalled();
     });

     afterAll(async () => {
        consoleSpy.mockRestore();      
      });

 });
 
