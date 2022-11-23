const watchedVideoModel = require('../model/watchedVideoModel');

const getWatchedVideo = async (req, res) => {
    try {
        const data = await watchedVideoModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postWatchedVideo = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const data = await watchedVideoModel.create({ userID, videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getWatchedVideo,
    postWatchedVideo,
};
