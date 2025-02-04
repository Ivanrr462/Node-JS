const net = require('net');
// Configuración del servidor al que nos conectaremos
const serverHost = '10.10.20.167';
const serverPort = 3000;
// Datos que enviaremos al servidor
const datosenviados = '¡Hola, servidor!';
// Crear una conexión TCP con el servidor
const client = net.createConnection({ host: serverHost, port: serverPort }, () => {console.log('Conexión establecida con el servidor');
// Enviar datos al servidor una vez que la conexión se haya establecido
    client.write(datosenviados);
});
// Manejar los datos recibidos del servidor
client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data}`);
// Puedes hacer más cosas con los datos recibidos aquí si es necesario
    client.end();
});
// Manejar el evento de cierre de la conexión
client.on('end', () => {
    console.log('Conexión cerrada por el servidor');
});
// Manejar errores de conexión
client.on('error', (err) => {
    console.error(`Error de conexión: ${err}`);
});
// Manejar el evento de cierre de la conexión. El cierre es lanzado por el evento end
client.on('close', () => {
    console.log('Conexión cerrada');
});