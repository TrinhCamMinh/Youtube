const express = require('express');
const router = express.Router();
const { getVideo, postVideo, updateVideoLike } = require('../controller/videoController');

//* [GET] methods
router.get('/', getVideo);

//* [POST] methods
router.post('/', postVideo);

//* [PUT] methods
router.put('/like/:videoID', updateVideoLike);

module.exports = router;
