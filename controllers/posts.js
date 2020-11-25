const Post = require('./../models/posts');

exports.createPost = (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "content can 't be empty !" })
    }
    const post = new Post({
        "title": req.body.title,
        "content": req.body.content,
        "author_id": req.body.author_id
    })
    Post.createPost(post, (err, data) => {
            if (err)
                res.status(500).json({ message: 'user not create !' + err })
            else res.status(201).send(data);
        })
        .catch(err => res.status(500).json({ message: 'there is an error :' + err }))
}


exports.getAllPosts = (req, res) => {



};



exports.getOnePost = (req, res) => {



};
exports.removePost = (req, res) => {



};