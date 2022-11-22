const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            require: true,
        },
        channelName: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        gender: {
            type: Boolean,
            require: true,
        },
        birthDate: {
            type: Date,
            require: true,
        },
        avatar: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('user', userSchema);
