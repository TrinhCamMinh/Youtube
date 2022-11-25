const commentModel = require('../model/commentModel');

//* [GET] methods
const getAllComment = async (req, res) => {
    try {
        const data = await commentModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getComment = async (req, res) => {
    try {
        const { videoID } = req.params;
        const data = await commentModel.find({ videoID });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [POST] methods
const postComment = async (req, res) => {
    try {
        const { videoID, userID, liked, commentAvatar, commentContent } = req.body;
        const comment = {
            commentAvatar,
            commentContent,
        };
        const data = await commentModel.create({ videoID, userID, liked, comment });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//* [PUT] methods
const putCommentLike = async (req, res) => {
    try {
        const { id } = req.params;
        await commentModel.findByIdAndUpdate({ _id: id }, { liked: liked + 1 });
        const data = await commentModel.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.messages);
    }
};

module.exports = {
    getAllComment,
    getComment,
    postComment,
    putCommentLike,
};
