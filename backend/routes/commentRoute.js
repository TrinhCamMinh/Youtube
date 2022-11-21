const express = require('express');
const router = express.Router();
const { getComment, postComment, putCommentLike } = require('../controller/commentController');

//* [GET] methods
router.get('/:videoId', getComment);

//* [POST methods
router.post('/', postComment);

//* [PUT] methods
router.put('/like/:commentId', putCommentLike);

module.exports = router;
