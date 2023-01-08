
const express = require('express');
const cors = require('cors');
const rutas = require('../routes/user');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //LEctura y parseo del body
        this.app.use(express.json());


        //Directorio publico
        this.app.use(express.static('public'));
    }

    //Defibir rutas
    routes() {
        this.app.use(this.userPath, rutas);
    }

    //Escuchar puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor está corriendo en el puerto ${this.port}`);
        });
    }


}


module.exports = Server;



























