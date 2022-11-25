const express = require('express');
const router = express.Router();
const { getAllComment, getComment, postComment, putCommentLike } = require('../controller/commentController');

//* [GET] methods
router.get('/', getAllComment);
router.get('/:videoID', getComment);

//* [POST methods
router.post('/', postComment);

//* [PUT] methods
router.put('/like/:id', putCommentLike);

module.exports = router;
