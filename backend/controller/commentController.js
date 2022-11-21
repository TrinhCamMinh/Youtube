const getComment = async (req, res) => {
    res.json('get all comments')
}

const postComment = async (req, res) => {
    res.json('post comment')
}

const putCommentLike = async (req, res) => {
    res.json("update video's like")
}

module.exports = {
    getComment,
    postComment,
    putCommentLike
}