const subscribeModel = require('../model/subscribedModel');

//* [GET] methods
const getSubscribeChannel = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await subscribeModel.find({ userID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [POST] methods
const postSubscribe = async (req, res) => {
    try {
        const { userID, videoID } = req.body;
        const data = await subscribeModel.create({ userID, videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getSubscribeChannel,
    postSubscribe,
};
