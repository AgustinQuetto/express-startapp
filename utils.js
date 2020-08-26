const _ = require("lodash");
const winston = require("winston");
const { Loggly } = require("winston-loggly-bulk");
const config = require("./config");

let self = {};

self.replaceAll = (target, search, replacement) => {
    return target.replace(new RegExp(search, "g"), replacement);
};

self.replaceAllWithData = (data, message) => {
    if (!message) return "";
    const matches = message.match(new RegExp("{(.*?)}", "g"));
    if (matches) {
        matches.map((m) => {
            message = message.replace(
                new RegExp(m, "g"),
                _.get(data, m.replace(/{|}/g, ""), "")
            );
        });
    }
    return message;
};

self.deleteKeys = (obj, keys = []) => {
    keys.map((k) => {
        _.unset(obj, k);
    });
    return obj;
};

module.exports = self;
