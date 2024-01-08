// server.mjs
import express from 'express';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

	this.middlewares()
	this.routes()
    	this.listen()
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
	    console.time()
    }

    routes() {
        // Agrega más rutas aquí según sea necesario.
    	console.log("routes")
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server in port', this.port);
		console.timeEnd()
        });
    }
}

new Server(); // Crea una instancia del servidor

