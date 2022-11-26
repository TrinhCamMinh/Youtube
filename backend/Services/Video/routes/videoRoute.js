const express = require('express');
const router = express.Router();
const {
    getVideo,
    getSpecificVideo,
    postVideo,
    updateVideoLike,
    updateVideoView,
    searchVideo,
} = require('../controller/videoController');
const { getSubscribeChannel, postSubscribe } = require('../controller/subscribedController');
const { getLikeVideo, postLike } = require('../controller/likedVideoController');
const { getWatchedVideo, postWatchedVideo } = require('../controller/watchedVideoController');
const { getWatchLateVideo, postWatchLateVideo } = require('../controller/watchLateVideoController');

//* [GET] methods
router.get('/', getVideo);
router.get('/:id', getSpecificVideo);
router.get('/like/:userID', getLikeVideo);
router.get('/watched/:userID', getWatchedVideo);
router.get('/watchLater/:userID', getWatchLateVideo);
router.get('/subscribed/:userID', getSubscribeChannel);
router.get('/search/:query', searchVideo);

//* [POST] methods
router.post('/', postVideo);
router.post('/like', postLike);
router.post('/subscribe', postSubscribe);
router.post('/watchLater', postWatchLateVideo);
router.post('/watched', postWatchedVideo);

//* [PUT] methods
router.put('/like/:videoID', updateVideoLike);
router.put('/view/:videoID', updateVideoView);

module.exports = router;
