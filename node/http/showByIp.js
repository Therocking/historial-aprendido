const http = require("http");

// IP de mi máquina.
const host = '192.168.1.32'; // Al utilizar la IP de mi máquina, todos los que están conectados a la misma red privada podrán ver el server.
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
