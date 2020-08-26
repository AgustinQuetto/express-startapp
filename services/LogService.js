const config = require("../config");
const winston = require("winston");
const { Loggly } = require("winston-loggly-bulk");

const LogglyInstance = new Loggly({
    token: config.loggly.token,
    subdomain: config.loggly.subdomain,
    tags: ["example"],
    json: true,
});

let self = {};

winston.add(LogglyInstance);

self.log = (element, opts = { level: "info" }) => {
    if (!element) return "Element undefined";
    if (!opts.level) opts.level = "info";

    winston.log(opts.level, element);
};
