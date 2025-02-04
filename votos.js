var express = require('express');
var app = express();
var cadenaInicial = '<html><body><h1>VOTOS</h1>Los votos del partido A: ';
var cadena0 = '<br> El porcentaje del partido A es: ';
var cadena1 = '<br>Los votos del partido B: ';
var cadena2 = '<br> El porcentaje del partido B es: ';
var cadena3 = '<br>Los votos del partido C: ';
var cadena4 = '<br> El porcentaje del partido C es: ';
var cadena5 = '<br>Los votos del partido N: ';
var cadena6 = '<br> El porcentaje del partido N es: ';
var cadenaFinal = '</body></html>'
var votostotal = 0;
var A = 0;
var B = 0;
var C = 0;
var N = 0;
var porcentajeA = 0;
var porcentajeB = 0;
var porcentajeC = 0;
var porcentajeN = 0;
var votos1 = process.openStdin();
console.log("Cual es tu voto? (A,B,C,N) ");
votos1.addListener("data", function(d) {
    if(d==0) {process.exit();}
    votos = d.toString().trim();
    if (votos=='A') {A++; votostotal++;}
    if (votos=='B') {B++; votostotal++;}
    if (votos=='C') {C++; votostotal++;}
    if (votos=='N') {N++; votostotal++;}
    porcentajeA = ((A/votostotal) * 100);
    porcentajeB = ((B/votostotal) * 100);
    porcentajeC = ((C/votostotal) * 100);
    porcentajeN = ((N/votostotal) * 100);
    console.log("Cual es tu voto? (A,B,C,N) ");
});

process.on('exit', function(codigo) {

});

app.get('/', function (req, res) {
    res.send(cadenaInicial + A + cadena0 + porcentajeA + '%' + cadena1  + B + cadena2 + porcentajeB + '%' + cadena3 + C + cadena4 + porcentajeC + '%' + cadena5 + N + cadena6 + porcentajeC + '%' + cadenaFinal);
});
app.listen(3000, function () {

});