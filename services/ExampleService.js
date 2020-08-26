const config = require("../config");
const queryString = require("query-string");
const utils = require("../utils");
const Axios = require("axios");

class LegajoService {
    constructor(exampleModel) {
        this.exampleModel = exampleModel;
    }

    async get() {}
}

module.exports = LegajoService;
