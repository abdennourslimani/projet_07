const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GropomaniaDB',
    port: 3306,
});


connection.connect(err => {
    if (err) {
        console.log("error to connect to DB" + err)
    } else {
        console.log("you are connected to DB successefully !");
    };
});

module.exports = connection;