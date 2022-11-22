const UserModel = require('../model/userModel');

//* [GET] methods
const getUser = (req, res) => {
    res.json('get specific user');
};

const searchVideo = (req, res) => {
    res.json('user searching');
};

const getWatchedVideo = (req, res) => {
    res.json("get user's watched video");
};

const getLikedVideo = async (req, res) => {
    try {
        const data = await likedVideoModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getWatchLaterVideo = (req, res) => {
    res.json("get user's watch later video");
};

const getSubscribedChannel = (req, res) => {
    res.json("get user's subscribed channel");
};

//* [POST] methods
const signup = (req, res) => {
    res.json('signup user');
};

const login = (req, res) => {
    res.json('login user');
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

const subscribeVideo = (req, res) => {
    res.json('post subscribe video');
};

const watchLaterVideo = (req, res) => {
    res.json('post watch later video');
};

const watchedVideo = (req, res) => {
    res.json('post watched video');
};

//* [PUT] methods
const updateUserAccount = (req, res) => {
    res.json('update user account');
};

module.exports = {
    signup,
    login,
    likeVideo,
    subscribeVideo,
    watchLaterVideo,
    watchedVideo,
    getUser,
    getWatchedVideo,
    getLikedVideo,
    getWatchLaterVideo,
    getSubscribedChannel,
    updateUserAccount,
    searchVideo,
};
