//Requerimos express
const express = require('express');
//Requerimos la base de datos (simulacion)
const libros = require('./data');

//ejecutamos express
const app = express();

//Configuramos el tipo de datos que vamos a soportar
//middlewares
app.use(express.json());

//configuramos nuestro puerto
const port = 3000;


// pruebas
// importamos la base de datos
//console.log(libros);








//iniciamos nuestro sservidor
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port}`)
});