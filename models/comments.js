const mySQLConnexion = require('../db/connexion');


const Comment = (com) => {
    this.id = com.id ? comment.id : null;
    this.comment = com.comment ? com.title : null;
    this.Posts_id = com.Posts_id ? com.Posts_id : null;
    this.publish_date = com.publish_date ? com.publish_date : null;
    this.author_id = com.author_id ? com.author_id : false;

}




Comment.createComment = (newComment, callback) => {
    mySQLConnexion.query(`INSERT INTO Comments ( comment, author_id,Posts_id) VALUES ("${newComment.comment}","${newComment.author_id}",'${newComment.Posts_id}')`, (err, res) => {
        if (err) {
            callback(err, null);
            console.log("there is an error when you try to create comment: ", err);
            return;
        }
        console.log("Création de l'utilisateur : ", { id: res.insertId, ...newComment });
        callback(null, { id: res.insertId, ...newComment });
    });
}


Comment.getAllComments = callback => {
    mySQLConnexion.query("SELECT * FROM Comments ORDER BY id DESC", (err, res) => {
        if (err) {
            console.log("there is an error: ", err);
            callback(null, err);
            return;
        }
        console.log("comments charge with success : ", res);
        callback(null, res);
    });
};




module.exports = Comment;