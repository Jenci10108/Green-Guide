const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jencipatel@09",
    database: "green_guide"
});

db.connect(function (err) {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully 🌱");
});

module.exports = db;