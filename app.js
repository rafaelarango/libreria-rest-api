//Requerimos express
const express = require('express');
//Requerimos la base de datos (simulacion)
const libros = require('./data');

//ejecutamos express
const app = express();

//Configuramos el tipo de datos que vamos a soportar
//middlewares
app.use(express.json());
// opcional, configuramos el orden de un json 
app.set('json spaces', 2);

//configuramos nuestro puerto
const port = 3000;


// pruebas
// importamos la base de datos
//console.log(libros);



//Ruta get de prueba
app.get('/', (req, res) => {
    res.send("hemos enviado la primera peticion por Get y optenido una respuesta")
}) 

app.get('/libros', (req, res) => {
    res.json(libros);
})



//iniciamos nuestro sservidor
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port}`)
});