const express = require('express');
const router = express.Router();
const PostsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');

router.post('/Add', auth, PostsCtrl.createPost);


/*router.post('/', auth, PostsCtrl.getOnePosts);

router.get('/', auth, PostsCtrl.getAllPosts);
router.get('/', auth, PostsCtrl.getOnePosts);
router.delete('/', auth, PostsCtrl.delete);*/


module.exports = router;