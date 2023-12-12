//Express
const express = require('express');
const app = express();
const port = 3000;

//path
const path = require ('path')

//Rutas
const mainRoute = require ('./src/routes/mainRoute')

app.use('/', mainRoute)

//hola


//archivos privados
app.use(express.static(path.resolve(__dirname, "./public")))

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));


// Servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});