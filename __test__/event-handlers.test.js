"use strict";

const faker = require("faker");
const pickup = require("../handlers/pickup");
const in_Transit = require("../handlers/inTransit");
const delivered = require("../handlers/delivered");

describe("EVENT HANDLERS TESTING", () => {
  let consoleSpy;
  let payload = {
    store: faker.company.companyName(),
    orderId: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  beforeEach((done) => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    done()
  });

  afterEach((done) => {
    consoleSpy.mockRestore();
    done()
  });

  test("pick up handler", async () => {
    await pickup(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("in transit handler", async () => {
    await in_Transit(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("delivered handler", async () => {
    await delivered(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
