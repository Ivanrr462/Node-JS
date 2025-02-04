var express = require('express');
var app = express();
var cadena='<html><body><select>';
var nombre = process.openStdin();
console.log("Apuntate a la cena del finde");
console.log("Escribe tu nombre");
nombre.addListener("data", function(d) {
    if(d==0) {process.exit();}
    cadena=cadena + '<option>' + d.toString() + '</option>';
    console.log("Escribe tu nombre");

});

process.on('exit', function(codigo) {
    cadena=cadena + '</select></body></html>';
    console.log(cadena);

});
app.get('/', function (req, res) {
    res.send(cadena);
});
app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000!');
});
