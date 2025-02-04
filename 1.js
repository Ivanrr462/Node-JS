
var nombre = process.openStdin();
console.log("Escribe tu nombre: ")
nombre.addListener("data", function(d){
        if(d==0) process.exit();
    console.log("Tu nombre es: " + d.toString().trim());

    console.log("Escribe tu nombre: ")
});
console.log("Esto aparece al final");
process.on('exit', function(codigo) {
    console.log("Hasta la vista PSOE");
});
