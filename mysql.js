var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pruebajs"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM alumno", function (err, result, fields) {
        if (err) throw err;
        var l = fields.length;
        for(i=0;i<l;i++)
        console.log(fields[i]);
    });
});