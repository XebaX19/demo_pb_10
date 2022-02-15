
const path = require('path');
const rutasApi = require('./routers/index');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static(path.resolve(__dirname, './public')));

//Template engines
app.set('views', './views');
app.set('view engine', 'ejs'); //app.set('view engine', 'pug');

// Rutas
app.use('/api', rutasApi);

app.get('/pug', (req, res) => {
  //Variables que se envían a la plantilla en el render 
  const nombre = 'Seba';
  const arreglo = [
    1,
    2,
    3
  ]
  res.render('pug/main', {showList: true, nombre, arreglo});
});

app.get('/ejs', (req, res) => {
  const arreglo = [1, 2, 3, 4]
  res.render('ejs/index', {showSaludo: true, arreglo});
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
});