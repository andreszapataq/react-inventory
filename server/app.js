const express = require('express');
const cors = require('cors');
const app = express();
const inventarioRouter = require('./routes/inventarioRoutes');
const usuarioRouter = require('./routes/usuarioRoutes')

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hola Papi!'
    });
})

// RUTAS
app.use('/api/v1/inventario', inventarioRouter)

app.use('/api/v1/login', usuarioRouter)

module.exports = app;