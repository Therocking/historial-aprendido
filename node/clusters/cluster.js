const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').cpus().length;

if (cluster.isMaster) {
  // En el proceso maestro, bifurca el trabajo entre los núcleos de CPU disponibles.
  
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Escucha eventos de terminación de los trabajadores y crea nuevos trabajadores en caso de falla.
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Trabajador ${worker.process.pid} ha terminado`);
    cluster.fork();
  });
  
} else {
  // Este es el proceso de trabajo que servirá la aplicación.
  const server = http.createServer((req, res) => {
	//console.timeStamp()
	//console.timeEnd()
  });

  server.listen(8000, () => {
    console.log(`Servidor en ejecución en el puerto 8000 (PID ${process.pid})`);
  });
}

