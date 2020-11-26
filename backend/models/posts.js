const mySQLConnexion = require('../db/connexion');


const Post = (post) => {
    this.id = post.id ? user.id : null;
    this.title = post.title ? post.title : null;
    this.content = post.content ? ost.content : null;
    this.publish_date = post.publish_date ? post.publish_date : null;
    this.author_id = post.author_id ? post.author_id : false;

}


//create New Post 

Post.createPost = (newPost, callback) => {
    mySQLConnexion.query(`INSERT INTO Posts (title, content, author_id) VALUES ("${newPost.title}","${newPost.content}",'${newPost.author_id}')`, (err, res) => {
        if (err) {
            callback(err, null);
            console.log("there is an error when you try to create post: ", err);
            return;
        }
        console.log("Création de l'utilisateur : ", { id: res.insertId, ...newUser });
        callback(null, { id: res.insertId, ...newPost });
    });
}


// get AllPosts

Post.getAllPosts = callback => {
    mySQLConnexion.query("SELECT Posts.id, Posts.title, Posts.content, Posts.publish_date, Posts.author_id , Users.name, Users.surname FROM Posts JOIN Users  ON Posts.author_id = Users.id ORDER BY Posts.publish_date DESC", (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};

// delete a post by id 

Post.removePost = (id, callback) => {
    mySQLConnexion.query("DELETE FROM Posts WHERE id ?", id, (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            callback({ kind: "not_found" }, null)
        }
        callback(null, res);
    });

};

// get one post

Post.getOnePost = (postId, callback) => {
    mySQLConnexion.query(`SELECT Posts.id, Posts.title, Posts.content, Posts.publish_date, Posts.author_id , Users.name, Users.surname FROM Posts JOIN Users  ON Posts.author_id = Users.id WHERE  posts.id=${postId} ORDER BY Posts.publish_date DESC`, (err, res) => {
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