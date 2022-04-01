const math = require("./main.js");

/* Modulo http para conexion a servidor*/
const http = require(`http`)
const os = require("os");

console.log(os.platform());


/*crear un servidor */

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(`<p>Texto cargadao con node js</p>`)
        res.end();

    }
).listen(3000);