const express = require('express');
var fs = require('fs');
const app = express();
var localhost = '10.10.20.166';

app.get('/:nombre/:dni', function (req, res) {
    var nombre = req.params.nombre;
    var dni = req.params.dni;
    var ip = req.connection.remoteAddress;
    console.log(ip);
    console.log(nombre.toString());
    res.send(nombre.toString().trim() + '-' + dni.toString());
    fs.appendFile('c:/tmp/nuevo.txt', ip, function (err) {
        if (err) throw err;
        console.log('Actualizado');
        var ahora = Date.now();
        var hora = hora.getHours();
        console.log(hora);
    });
});

const PORT = 80;

app.listen(PORT,  function() {
    console.log('Escuchando en el puerto' + PORT);
});