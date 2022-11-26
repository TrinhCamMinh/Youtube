const subscribeModel = require('../model/subscribedModel');

//* [GET] methods
const getAllUserSubscribeChannel = async (req, res) => {
    try {
        const { userID } = req.params;
        const data = await subscribeModel.find({ userID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getSubscribeChannel = async (req, res) => {
    try {
        const { userID, channelID } = req.query;
        const data = await subscribeModel.find({ userID, channelID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [POST] methods
const postSubscribe = async (req, res) => {
    try {
        const { userID, channelID } = req.body;
        const exist = await subscribeModel.find({ userID, channelID });
        //* check if this user has already subscribed this channel or not
        if (exist.length > 0) {
            return res.status(200).json('user has already subscribe this channel');
        }
        const data = await subscribeModel.create({ userID, channelID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getAllUserSubscribeChannel,
    getSubscribeChannel,
    postSubscribe,
};
