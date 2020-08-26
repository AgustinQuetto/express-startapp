const _ = require("lodash");
class LegajoController {
    constructor(exampleService, redisController) {
        this.legajoService = exampleService;
        this.redisController = redisController;
    }

    async get(req, res) {
        console.log("headers", req.headers);
        console.log("body", req.body);
        return res.json({ test: true });
    }
}

module.exports = LegajoController;
