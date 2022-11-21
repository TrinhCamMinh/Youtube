//* [GET] methods
const getVideo = async (req, res) => {
    res.json('get all videos');
};

//* [POST] methods
const postVideo = async (req, res) => {
    res.json('post video');
};

//* [PUT] methods
const updateVideoLike = async (req, res) => {
    res.json('update video like');
};

module.exports = {
    getVideo,
    postVideo,
    updateVideoLike,
};
