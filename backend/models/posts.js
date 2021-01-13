const mySQLConnexion = require('../db/connexion');


const Post = function(post) {
    this.id = post.id ? post.id : null;
    this.title = post.title ? post.title : null;
    this.image_url = post.image_url ? post.image_url : null;
    this.content = post.content ? post.content : null;
    this.publish_date = post.publish_date ? post.publish_date : null;
    this.author_id = post.author_id ? post.author_id : null;
    this.comments = post.comments ? post.comments : []

}


//create New Post 

Post.createPost = (newPost, callback) => {
    mySQLConnexion.query(`INSERT INTO Posts (title, image_url,content, author_id) VALUES ("${newPost.title}","${newPost.image_url}","${newPost.content}","${newPost.author_id}")`, (err, res) => {
        if (err) {
            callback(err, null);
            console.log("there is an error when you try to create post: ", err);
            return;
        }
        console.log("Création de l'utilisateur : ", { id: res.insertId, ...newPost });
        console.log(res.insertId)
        callback(null, { id: res.insertId, ...newPost });
    });
}


// get AllPosts

Post.getAllPosts = callback => {
    mySQLConnexion.query("SELECT Posts.id, Posts.title, Posts.content, Posts.image_url,Posts.publish_date, Posts.author_id , Users.name, Users.surname FROM Posts JOIN Users  ON Posts.author_id = Users.id ORDER BY Posts.publish_date DESC", (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};

// delete a post by id 

Post.removePost = (id, callback) => {
    mySQLConnexion.query("DELETE FROM Posts WHERE Posts.id= ?", id, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            callback({ kind: "not_found" }, null)
            return;
        }
        callback(null, res);
    });

};

// get one post

Post.getOnePost = (postId, callback) => {
    mySQLConnexion.query(`SELECT Posts.id, Posts.title, Posts.content, Posts.publish_date, Posts.author_id , Users.name, Users.surname FROM Posts JOIN Users  ON Posts.author_id = Users.id WHERE  Posts.id=${postId} ORDER BY Posts.publish_date DESC`, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            callback({ kind: "not_found" }, null)
        }
        callback(null, res);
        return;

    });

};


module.exports = Post;