const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: { type: String, required: true },
        age: { type: Number, default: 21 },
        birthday: Date,
        additional: Schema.Types.Mixed,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("examples", ExampleSchema);
