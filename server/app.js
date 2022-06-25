const express = require('express');
const cors = require('cors');
const app = express();
const inventarioRouter = require('./routes/inventarioRoutes');
const bodegaRouter = require('./routes/bodegaRoutes')
const usuarioRouter = require('./routes/usuarioRoutes')
const loteRouter = require('./routes/loteRoutes')
const bodegaRouterNew = require('./routes/bodegaRoutesNew')

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hola Papi!'
    });
})

// RUTAS
app.use('/api/v1/inventario', inventarioRouter)
app.use('/api/v1/crear-bodega', bodegaRouter)
app.use('/api/v1/asesores', bodegaRouter)
app.use('/api/v1/lote', loteRouter)
app.use('/api/v1/bodegas', bodegaRouterNew)

app.use('/api/v1/login', usuarioRouter)

module.exports = app;