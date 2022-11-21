const express = require('express')
const router = express.Router();
const {getVideo, postVideo} = require('../controller/videoController')

//[GET] methods
router.get('/', getVideo)

//[POST] methods
router.post('/', postVideo)

module.exports = router;