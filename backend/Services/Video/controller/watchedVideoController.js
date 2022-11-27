const watchedVideoModel = require('../model/watchedVideoModel');

const getWatchedVideo = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await watchedVideoModel.find({ userID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postWatchedVideo = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const exits = await watchedVideoModel.find({ userID, videoID });
        if (exits.length > 0) {
            return res.status(200).json('this video has already been posted in database');
        }
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
