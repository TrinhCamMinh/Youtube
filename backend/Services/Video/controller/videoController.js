const VideoModel = require('../model/videoModel');
//* [GET] methods
const getVideo = async (req, res) => {
    try {
        const data = await VideoModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getSpecificVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await VideoModel.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [POST] methods
const postVideo = async (req, res) => {
    try {
        const { video, thumbnail, ownerID, title, description } = req.body;
        if (!video || !thumbnail || !ownerID || !title || !description)
            return res.status(500).json('All filed must be filled');
        const data = await VideoModel.create({ video, thumbnail, ownerID, title, description });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [PUT] methods
const updateVideoLike = async (req, res) => {
    try {
        const { videoID } = req.params;
        const oldData = await VideoModel.findById(videoID).select({ like: 1, _id: 0 });
        await VideoModel.findOneAndUpdate({ _id: videoID }, { like: oldData.like + 1 });
        const data = await VideoModel.findById(videoID);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const updateVideoView = async (req, res) => {
    try {
        const { videoID } = req.params;
        const oldData = await VideoModel.findById(videoID).select({ view: 1, _id: 0 });
        await VideoModel.findOneAndUpdate({ _id: videoID }, { view: oldData.view + 1 });
        const data = await VideoModel.findById(videoID);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getVideo,
    getSpecificVideo,
    postVideo,
    updateVideoLike,
    updateVideoView,
};
