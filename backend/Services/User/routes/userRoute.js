const express = require('express');
const router = express.Router();
const {
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
    searchVideo,
} = require('../controller/userController');

//* [GET] methods
router.get('/watched/:userId', getWatchedVideo);
router.get('/watchLater/:userId', getWatchLaterVideo);
router.get('/liked/:userID', getLikedVideo);
router.get('/subscribe/:userId', getSubscribedChannel);
router.get('/search/:query', searchVideo);
router.get('/:userId', getUser);

//* [POST] methods
router.post('/signup', signup);
router.post('/login', login);
router.post('/like', likeVideo);
router.post('/subscribe', subscribeVideo);
router.post('/watchLater', watchLaterVideo);
router.post('/watched', watchedVideo);

//* [PUT] methods
router.put('/update', updateUserAccount);

module.exports = router;
