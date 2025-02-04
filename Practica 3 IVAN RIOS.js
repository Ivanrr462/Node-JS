const mysql = require('mysql');
const readline = require('readline');

// Crear conexión a la base de datos
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");

    con.query("CREATE DATABASE IF NOT EXISTS productos", function (err, result) {
        if (err) throw err;
        console.log("Base de datos creada");

        con.query("USE productos", function (err, result) {
            if (err) throw err;
            console.log("Usando la base de datos productos");

            const sql = "CREATE TABLE IF NOT EXISTS Producto (nombre VARCHAR(30), codigo VARCHAR(10))";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Tabla Producto creada");

                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                rl.on('line', (input) => {
                    if(input === '0') {
                        rl.close();
                        con.end();
                    } else {
                        const [nombre, codigo] = input.split('-');
                        const sql = `INSERT INTO Producto (nombre, codigo) VALUES ('${nombre}', '${codigo}')`;
                        con.query(sql, function (err, result) {
                            if (err) throw err;
                            console.log("Datos insertados");
                        });
                    }
                });
            });
        });
    });
});
