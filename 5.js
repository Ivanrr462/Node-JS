
var numero = process.openStdin();
console.log("Escribe un numero: ");
var suma=0;
var contador= 0;
numero.addListener("data", function(d){
    var num = parseInt(d.toString().trim());
    if(d==0) process.exit();
    if(d==4) {contador ++}
    console.log("Escribe otro numero: ")
});
process.on('exit', function(codigo) {
    console.log("Has puesto " + contador + " 4");
});