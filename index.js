const express = require("express"),
    app = express(),
    routes = require("./routes"),
    config = require("./config"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    moment = require("moment"),
    mongoose = require("mongoose");

mongoose.connect(config.mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(config.port, () => {
    console.log(`Running example server ${moment()} - PORT ${config.port}`);
});
