const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadFile');
const {
    getVideo,
    getSpecificVideo,
    postVideo,
    updateVideoLike,
    updateVideoView,
    searchVideo,
} = require('../controller/videoController');
const {
    getAllUserSubscribeChannel,
    getSubscribeChannel,
    postSubscribe,
} = require('../controller/subscribedController');
const { getLikeVideo, postLike } = require('../controller/likedVideoController');
const { getWatchedVideo, postWatchedVideo } = require('../controller/watchedVideoController');
const { getWatchLateVideo, postWatchLateVideo } = require('../controller/watchLateVideoController');
const { getShortVideo, postShortVideo } = require('../controller/shortVideoController');

//* [GET] methods
router.get('/short/', getShortVideo);
router.get('/liked/:userID', getLikeVideo);
router.get('/watched/:userID', getWatchedVideo);
router.get('/watchLater/:userID', getWatchLateVideo);
router.get('/subscribed', getSubscribeChannel);
router.get('/subscribed/all/:userID', getAllUserSubscribeChannel);
router.get('/search/:query', searchVideo);
router.get('/:id', getSpecificVideo);
router.get('/', getVideo);

//* [POST] methods
router.post('/short',upload.single('image'), postShortVideo);
router.post('/like', postLike);
router.post('/subscribe', postSubscribe);
router.post('/watchLater', postWatchLateVideo);
router.post('/watched', postWatchedVideo);
router.post('/', postVideo);

//* [PUT] methods
router.put('/like/:videoID', updateVideoLike);
router.put('/view/:videoID', updateVideoView);

module.exports = router;
