process.stdin.setEncoding('utf8');
var fs = require('fs');
var express = require('express');
var app = express();
var cadena = '<html><body><select>';
fs.appendFile('C:/tmp/indice.html', cadena, function(err) {
    if (err) throw err;
});
var nombre = process.openStdin();
console.log("Apuntate");
console.log("Escribe tu nombre");
nombre.addListener("data", function (d) {
    if(d==0) {process.exit();}
    cadena="<option>" + d.toString() + "</option>";
    fs.appendFile('C:/tmp/indice.html', cadena, function(err) {
        if (err) throw err;
    });
    console.log("Escribe tu nombre:");
});

process.on('exit', function(codigo) {
    cadena="</select></body></html>";
    fs.appendFile('C:/tmp/indice.html', cadena, function(err) {
        if (err) throw err;
    });
});