const mysql = require('mysql');

const db = mysql.createConnection({
    host    : '44.197.229.238',
    user    : 'root',
    password: 'root',
    database: 'hospitalmanagementsystem'
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;
