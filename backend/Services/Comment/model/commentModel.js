const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        videoID: {
            type: String,
            require: true,
        },
        userID: {
            type: String,
            require: true,
        },
        like: {
            type: Number,
            require: true,
            default: 0,
        },
        comment: {
            type: Array,
            require: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('comment', commentSchema);
