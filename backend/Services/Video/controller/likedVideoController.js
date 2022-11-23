const likeVideoModel = require('../model/likedVideoModel');

const getLikeVideo = async (req, res) => {
    try {
        const data = await likeVideoModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postLike = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const data = await likeVideoModel.create({ userID, videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getLikeVideo,
    postLike,
};
