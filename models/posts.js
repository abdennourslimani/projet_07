const mySQLConnexion = require('../db/connexion');


const Post = (post) => {
    this.id = post.id ? user.id : null;
    this.title = post.title ? post.title : null;
    this.content = post.content ? ost.content : null;
    this.publish_date = post.publish_date ? post.publish_date : null;
    this.author_id = post.author_id ? post.publish_date : false;

}


//create New Post 

Post.createPost = (newPost, callback) => {
    mySQLConnexion.query(`INSERT INTO Posts (title, content, author_id) VALUES ("${newPost.title}","${newPost.content}",'${newPost.author_id}')`, (err, res) => {
        if (err) {
            console.log("there is an error when you try to create post: ", err);
            callback(err, null);
            return;
        }
        console.log("Création de l'utilisateur : ", { id: res.insertId, ...newUser });
        callback(null, { id: res.insertId, ...newUser });
    });
}