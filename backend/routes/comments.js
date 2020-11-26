const express = require('express');
const router = express.Router();
const commentsCtrl = require('./../controllers/comments');
const auth = require('../middleware/auth');




router.post('/add', auth, commentsCtrl.createComment);
router.get('/getAll', auth, commentsCtrl.getAllComments);



module.exports = router;