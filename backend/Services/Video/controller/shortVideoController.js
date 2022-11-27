const shortVideoModel = require('../model/shortVideoModel');
const ShortVideoModel = require('../model/shortVideoModel');

//* [GET] methods
const getShortVideo = async (req, res) => {
    try {
        const data = await ShortVideoModel.find({});
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

//* [POST] methods
const postShortVideo = async (req, res) => {
    try {
        const image = req.file;
        const path = `/short/${image.filename}`;
        const { userID } = req.body;
        const data = await shortVideoModel.create({ userID, image: path });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getShortVideo,
    postShortVideo,
};
