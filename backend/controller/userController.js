const signup = (req, res) => {
    res.json('signup user');
}

const login = (req, res) => {
    res.json('login user');
}

const likeVideo = (req, res) => {
    res.json('post like video')
}

const subscribeVideo = (req, res) => {
    res.json('post subscribe video')
}

const watchLaterVideo = (req, res) => {
    res.json('post watch later video')
}

const watchedVideo = (req, res) => {
    res.json('post watched video')
}

const getUser = (req, res) => {
    res.json('get specific user')
}

const searchVideo = (req, res) => {
    res.json('user searching')
}

const getWatchedVideo = (req, res) => {
    res.json("get user's watched video")
}

const getLikedVideo = (req, res) => {
    res.json("get user's liked video")
}

const getWatchLaterVideo = (req, res) => {
    res.json("get user's watch later video")
}

const getSubscribedChannel = (req, res) => {
    res.json("get user's subscribed channel")
}

const updateUserAccount = (req, res) => {
    res.json("update user account")
}

module.exports = {
    signup,
    login,
    likeVideo,
    subscribeVideo,
    watchLaterVideo,
    watchedVideo,
    getUser,
    getWatchedVideo,
    getLikedVideo,
    getWatchLaterVideo,
    getSubscribedChannel,
    updateUserAccount,
    searchVideo
}