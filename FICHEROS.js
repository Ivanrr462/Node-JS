process.stdin.setEncoding('utf8');
var fs = require('fs');
console.log("Escribe tu nombre");
var nombre = process.openStdin();

process.on('exit', function (codigo){
    fs.close();
    console.log("Gra");
});

nombre.addListener("data", function (d) {
    fs.appendFile('C:/Users/Alumno/Desktop/stream.txt', '\n' + d.toString().trim().toUpperCase(), function (err) {
        if(err) throw err;
        console.log("Escribe tu nombre");
    });
    if (d==0) process.exit();
});
process.on('exit', function (codigo){
    fs.close();
    console.log("Gra");
});
