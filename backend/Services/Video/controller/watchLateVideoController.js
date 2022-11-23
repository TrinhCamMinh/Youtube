const watchLateVideoModel = require('../model/watchLateVideoModel');

const getWatchLateVideo = async (req, res) => {
    try {
        const data = await watchLateVideoModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postWatchLateVideo = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const data = await watchLateVideoModel.create({ userID, videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getWatchLateVideo,
    postWatchLateVideo,
};
