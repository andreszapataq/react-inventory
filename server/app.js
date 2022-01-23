const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken')
const inventarioRouter = require('./routes/inventarioRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hola Papi!'
    });
})

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com'
    }
    
    jwt.sign({user}, 'mierdakey', (err, token) => {
        res.json({
            token
        })
    })
})

// RUTAS
app.use('/api/v1/inventario', inventarioRouter);

module.exports = app;