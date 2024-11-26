const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Carpeta para las vistas

// Ruta principal para renderizar la vista index.ejs
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs
});

// Crear servidor HTTP
const server = http.createServer(app);

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});