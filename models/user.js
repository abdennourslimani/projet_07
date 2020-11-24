const mySQLConnexion = require("./../db/connexion");

const User = (user) => {
    this.id = user.id ? user.id : null;
    this.name = user.name ? user.name : null;
    this.surname = user.surname ? user.surname : null;
    this.email = user.email ? user.email : null;
    this.password = user.password ? user.password : null;
    this.createTime = user.createTime ? user.createTime : null;
    this.isAdmin = user.isAdmin ? user.isAdmin : false;
}

// CRÉATION D'UN NOUVEL UTILISATEUR

User.create = (newUser, result) => {
    mySQLConnexion.query("INSERT INTO  Users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("erreur: ", err);
            result(err, null);
            return;
        }
        console.log("Création de l'utilisateur : ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
}

// RÉCUPÉRATION D'UN UTILISATEUR AVEC SON EMAIL

User.findByEmail = (email, callback) => {
    mySQLConnextion.query(`SELECT * FROM Users WHERE email = '${email}'`, (err, res) => {
        if (err) {
            console.log('error when login', err);
            callback(err, null);
            return;
        }
        if (res.length) {
            console.log('custumor found : ', res[0])
            callback(null, res[0]);
            return;
        }
        callback({ kind: "not_found" }, null)

    });
}

module.exports = User;