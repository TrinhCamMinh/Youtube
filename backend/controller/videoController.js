const getVideo = async (req, res) => {
    res.json('get all videos')
}

const postVideo = async (req, res) => {
    res.json('post video')
}

module.exports = {
    getVideo,
    postVideo,
}