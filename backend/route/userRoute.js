const express = require('express');
const router = express.Router();
const {signup,login,likeVideo,subscribeVideo,watchLaterVideo,watchedVideo,getUser,getWatchedVideo,getLikedVideo,getWatchLaterVideo,getSubscribedChannel,updateUserAccount, searchVideo} = require('../controller/userController');


//[GET] methods
router.get('/watched/:id', getWatchedVideo);
router.get('/watchLater', getWatchLaterVideo);
router.get('/liked/:id', getLikedVideo);
router.get('/subscribe/:id', getSubscribedChannel);
router.get('/search/:query', searchVideo);
router.get('/:id', getUser);

//[POST] methods
router.post('/signup', signup);
router.post('/login', login);
router.post('/like', likeVideo);
router.post('/subscribe', subscribeVideo);
router.post('/watchLater', watchLaterVideo);
router.post('/watched', watchedVideo);

//[PUT] methods
router.put('/update', updateUserAccount);


module.exports = router;