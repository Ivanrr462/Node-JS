var express = require('express');
var app = express();
var cadenaInicial = '<html><body><h1>Temperatura en Málaga</h1>La temperatura actual es ';
var cadena1 = 'ºC<br>La temperatura máxima es ';
var cadena2 = 'ºC<br>La temperatura mínima es ';
var cadenaFinal = 'ºC</body></html>'
var temperatura = 0;
var temperaturamax = 0;
var temperaturamin = 100;
var nombre = process.openStdin();
console.log("Cual es la temperatura? ");
nombre.addListener("data", function(d) {
    if(d==0) {process.exit();}
    temperatura = d.toString().trim();
    if (temperaturamin > temperatura) {temperaturamin = temperatura;}
    if (temperaturamax < temperatura) {temperaturamax = temperatura;}

    console.log("Cual es la temperatura? ");
});

process.on('exit', function(codigo) {

});

app.get('/', function (req, res) {
    res.send(cadenaInicial + temperatura + cadena1 + temperaturamax + cadena2 + temperaturamin + cadenaFinal);
});
app.listen(3000, function () {

});

