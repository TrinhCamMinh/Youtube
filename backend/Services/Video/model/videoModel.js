const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        videoID: {
            type: String,
            require: true,
        },
        thumbnailID: {
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
            type: String,
            require: true,
            default: 0,
        },
        view: {
            type: String,
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
