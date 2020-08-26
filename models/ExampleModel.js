const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);

const exampleSchema = new Schema(
    {
        example: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("example", exampleSchema);
