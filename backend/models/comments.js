const mySQLConnexion = require('../db/connexion');


const Comment = (com) => {
    this.id = com.id ? com.id : null;
    this.comment = com.comment ? com.comment : null;
    this.post_id = com.post_id ? com.post_id : null;
    this.publish_date = com.publish_date ? com.publish_date : null;
    this.author_id = com.author_id ? com.author_id : false;

}




Comment.createComment = (newComment, callback) => {
    mySQLConnexion.query(`INSERT INTO Comments ( comment, author_id,post_id) VALUES ("${newComment.comment}","${newComment.author_id}",'${newComment.post_id}')`, (err, res) => {
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