const express = require('express');
const router = express.Router();
const PostsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');




router.post('/add', auth, PostsCtrl.createPost);
router.get('/getAll', auth, PostsCtrl.getAllPosts);
router.get('/getOne/:postId', auth, PostsCtrl.getOnePost);
router.delete('/delete/:postId', auth, PostsCtrl.removePost);


module.exports = router;