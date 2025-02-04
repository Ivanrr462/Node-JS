const fs = require('fs');
const http = require("http");

fs.readdir('C:/', (err, files) => {
    if(err) return console.error(err);

    var l=files.length;
    cadena="<html><body><select>";

    for(i=0;i<l;i++)
    { cadena= cadena + "<option>" + files[i] + "</option>"; }
    var cadena=cadena + "</select></body></html>";

    fs.appendFile('c:/temp/indice2.html', cadena, function (err) {
        if (err) throw err;
    });
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(cadena);
        return res.end();

    }).listen(8081);

});