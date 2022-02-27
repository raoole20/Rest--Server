const express = require('express');
const cors = require('cors');
class Servers{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.Path = '/api/usarios';
        
        //  Middlewares
        this.middlewares();

        // rutas de mi app
        this.router();
    }

    middlewares(){

        // Derectorio Publico
        this.app.use( express.static('public'));

        // Pareseo y lectura del body
        // traduce el body a un json
        this.app.use( express.json() );

        // directorio publico
        this.app.use( cors() )

    }

    router(){
        this.app.use( this.Path, require('../routes/user.js'))
    }

    listen(){
        this.app.listen( process.env.PORT,()=>{
            console.log( 'Conrriendo en el puerto: ', process.env.PORT );
        } );
    }
}


module.exports = Servers;