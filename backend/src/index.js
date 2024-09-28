const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('../database/connect.js');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Habilitar CORS para todas las rutas
app.use(cors());


//Routes
app.use(require('../routes/contrato.routes.js'));
app.use(require('../routes/expediente.routes.js'));
app.use(require('../routes/user.routes.js'));

app.listen(3001);
console.log("Server on port 3001");
