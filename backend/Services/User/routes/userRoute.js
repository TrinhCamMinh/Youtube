const express = require('express');
const router = express.Router();
const { signup, login, likeVideo, getUser, updateUserAccount } = require('../controller/userController');
const upload = require('../middleware/uploadFiles');

//* [GET] methods
router.get('/:userId', getUser);

//* [POST] methods
router.post('/signup', upload.single('avatar'), signup);
router.post('/login', login);
router.post('/like', likeVideo);

//* [PUT] methods
router.put('/update/:id', updateUserAccount);

module.exports = router;
