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
    // data.profile_pic_name = (request.file) ? request.file.filename : "";


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
                        console.log('je suis com' + com);
                        let post = posts.find(elt => elt.id === com.post_id)
                        if (post !== undefined && post.comments !== undefined && post.comments.length > 0) {
                            post.comments.push(com);
                        } else {
                            post.comments = [com];
                        }

                    })
                    res.send(posts)
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
            Comment.getAllComments((err, comments) => {
                if (err) {
                    res.status(500).send({ message: 'no comments' + err });
                } else {
                    comments.forEach(com => {
                        let post = posts[0]
                        if (post.id === com.post_id) {
                            post.comments = [com]
                        }
                    })
                    res.send(posts)
                }
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