// server.mjs
import express from 'express';
import cluster from 'cluster';
import numCPUs from 'os';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        if (cluster.isPrimary) {
            for (let i = 0; i < numCPUs.cpus().length; i++) {
                cluster.fork();
            }

            cluster.on('exit', (worker, code, signal) => {
                console.log(`Proceso hijo ${worker.process.pid} terminado`);
            });
        } else {
            this.middlewares();
            this.routes();
            this.listen();
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
	    console.time()
    }

    routes() {
        // Agrega más rutas aquí según sea necesario.
      this.app.get('/', (req, res) => { // Tomando el idioma del cliente
	 const lang = req.header('Accept-Language')
	 if(lang.match(/,/)) {
	    const [, l] = lang.split(',')
	 console.log(l, 'splited')
	    return
	 }
	 console.log(lang)

	 res.json({msg: 'listo'})
      })	
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server in port', this.port);
		console.timeEnd()
        });
    }
}

new Server(); // Crea una instancia del servidor

