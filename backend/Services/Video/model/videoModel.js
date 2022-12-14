const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        video: {
            type: String,
            require: true,
        },
        thumbnail: {
            type: String,
            require: true,
        },
        ownerID: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        like: {
            type: Number,
            require: true,
            default: 0,
        },
        view: {
            type: Number,
            require: true,
            default: 0,
        },
        description: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);
module.exports = mongoose.model('video', videoSchema);
