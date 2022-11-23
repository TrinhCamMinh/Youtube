const subscribeModel = require('../model/subscribedModel');

const getSubscribeChannel = async (req, res) => {
    try {
        const data = await subscribeModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

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
