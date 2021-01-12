const Comment = require('../models/comments');


exports.createComment = (req, res) => {
    if (!req.body) {
        res.status(500).json({ message: 'content cant be empty!' })
    }
    const comment = new Comment({
        comment: req.body.comment,
        author_id: req.userId,
        post_id: req.body.post_id,
    });
    Comment.createComment(comment, (err, data) => {
        if (err)
            res.status(400).json({ message: 'Comment not create !' + err })
        else res.send(data);
    });
}






exports.getAllComments = (req, res) => {
    Comment.getAllComments((err, data) => {
        if (err)
            res.status(500).send({ message: 'no comment found' + err });
        else res.send(data);
    });
}