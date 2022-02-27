require('dotenv').config();
const  Servers = require('./models/Servers');

const server = new Servers();

server.listen(); 

