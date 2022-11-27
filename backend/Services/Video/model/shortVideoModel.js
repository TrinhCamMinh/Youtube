const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortVideoSchema = new Schema(
    {
        userID: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('shortVideo', shortVideoSchema);
