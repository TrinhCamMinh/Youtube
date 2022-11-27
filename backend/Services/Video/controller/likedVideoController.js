const likeVideoModel = require('../model/likedVideoModel');

const getLikeVideo = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await likeVideoModel.find({ userID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const postLike = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const exist = await likeVideoModel.find({ userID, videoID });
        if (exist.length > 0) {
            return res.status(200).json('user has already like this video');
        }
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
