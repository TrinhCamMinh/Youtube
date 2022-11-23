const express = require('express');
const router = express.Router();
const { getComment, postComment, putCommentLike } = require('../controller/commentController');

//* [GET] methods
router.get('/:videoId', (req, res) => {
    res.json('test comment');
});

//* [POST methods
router.post('/', postComment);

//* [PUT] methods
router.put('/like/:id', putCommentLike);

module.exports = router;
