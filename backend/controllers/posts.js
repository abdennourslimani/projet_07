const Post = require('./../models/posts');
const Comment = require('./../models/comments');

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
    Post.getAllPosts((err, posts) => {
        if (err)
            res.status(500).send({ message: 'no post found' + err });
        else {
            // recuperate comments
            Comment.getAllComments((err, comments) => {
                if (err) {
                    res.status(500).send({ message: 'no comments found!' + err });
                } else {
                    comments.forEach(com => {

                        // à rajouter push comments to posts
                    })
                    res.send(articles)
                }
            })
        }
    })
};



exports.getOnePost = (req, res) => {
    Post.getOnePost(req.params.postId, (err, posts) => {
        if (err) {
            res.status(500).send({ message: 'no post found!' + err });
        } else {
            Commentaire.getAllComments((err, comments) => {
                if (err) {
                    res.status(500).send({ message: 'On a rien trouvé !' + err });
                }

                // à rajouter push comments to posts

                res.send(posts)
            })
        }
    })




};




exports.removePost = (req, res) => {
    Post.removePost(req.params.postId, (err, data) => {
        if (err) {
            if (err.kind === "Non trouvé !") {
                res.status(404).json({ message: 'post not found with  ' + req.params.postId })
            } else {
                res.status(500).json({ message: 'no article with this id : ' + req.params.postId })
            }
        } else res.json({ message: 'Article supprimé avec succès !' })
    })
};