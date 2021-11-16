"use strict";

const events = require("./hub");
require("./modules/vendor");
require("./modules/driver");

const in_Transit = require("./handlers/inTransit");
const delivered = require("./handlers/delivered");

events.on("in-transit", in_Transit);
events.on("delivered", delivered);
