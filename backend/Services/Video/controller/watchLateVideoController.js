const watchLateVideoModel = require('../model/watchLateVideoModel');

const getWatchLateVideo = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await watchLateVideoModel.find({ userID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postWatchLateVideo = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const exist = await watchLateVideoModel.find({ userID, videoID });
        if (exist.length > 0) {
            return res.status(200).json('User has already save this video');
        }
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
