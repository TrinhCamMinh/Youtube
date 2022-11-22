const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscribedSchema = new Schema(
    {
        userID: {
            type: String,
            require: true,
        },
        videoID: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('subscribe', subscribedSchema);
