
var numero = process.openStdin();
console.log("Escribe un numero: ");
var suma=0;
var contador= 0;
numero.addListener("data", function(d){
    var num = parseInt(d.toString().trim());
    if(d==0) process.exit();
    suma += num;
    contador ++
    console.log("Escribe otro numero: ")
});
process.on('exit', function(codigo) {
    var media = suma / contador;
    console.log("La media de los numeros es: " + media);
});