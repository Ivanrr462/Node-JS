const net = require('net');
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pruebajs"
});
const ip = '10.10.20.166';

const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    socket.write('Bienvenido al servidor TCP!\r\n');
// Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente: ${data}`);

    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = 3000;
server.listen(PORT, ip, () => {
    console.log(`Servidor TCP escuchando en el puerto ${ip}:${PORT}`);
});
