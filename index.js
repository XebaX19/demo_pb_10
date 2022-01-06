
const path = require('path');
const rutasApi = require('./routers/index');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static(path.resolve(__dirname, './public')));

// Rutas
app.use('/api', rutasApi);

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
});