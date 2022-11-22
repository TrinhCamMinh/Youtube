//* [GET] methods
const getComment = async (req, res) => {
    res.json('get all comments');
};

//* [POST] methods
const postComment = async (req, res) => {
    res.json('post comment');
};

//* [PUT] methods
const putCommentLike = async (req, res) => {
    res.json("update video's like");
};

module.exports = {
    getComment,
    postComment,
    putCommentLike,
};
