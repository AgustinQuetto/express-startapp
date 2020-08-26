const RedisService = require("./services/RedisService");
const RedisServiceInstance = new RedisService();

const ExampleModel = require("./models/ExampleModel");
const ExampleController = require("./controllers/ExampleController");
const ExampleService = require("./services/ExampleService");

const ExampleServiceInstance = new ExampleService(ExampleModel);
const ExampleControllerInstance = new ExampleController(ExampleServiceInstance);

module.exports = (app) => {
    app.get("/", (req, res) => {
        return res.sendStatus(200);
    });

    app.get("/", ExampleControllerInstance.get);
};
