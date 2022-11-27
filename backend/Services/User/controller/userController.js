const UserModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');

//* [GET] methods
const getUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const data = await UserModel.findById(userId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [POST] methods
const signup = async (req, res) => {
    const avatar = req.file;
    const path = `/avatar/${avatar.filename}`;
    const { userName, channelName, password, email, gender, birthDate, phoneNumber, location } = req.body;
    try {
        if (!validator.isEmail(email)) {
            return res.status(500).json('Email invalid');
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(500).json('Password is not strong enough');
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const data = await UserModel.create({
            userName,
            channelName,
            password: hash,
            email,
            gender,
            birthDate,
            avatar: path,
            phoneNumber,
            location,
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(500).json('Wrong email');

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(500).json('Wrong password');

        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const likeVideo = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const data = await LikedVideoModel.create({ userID, videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

//* [PUT] methods
const updateUserAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, email, phoneNumber, location } = req.body;
        await UserModel.findByIdAndUpdate({ _id: id }, { userName, email, phoneNumber, location });
        const data = await UserModel.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    signup,
    login,
    likeVideo,
    getUser,
    updateUserAccount,
};
