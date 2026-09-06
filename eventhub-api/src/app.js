require('dotenv').config();

const express = require('express');

const eventoRoutes = require('./routes/eventoRoutes');
const participanteRoutes = require('./routes/participanteRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'EventHub API funcionando!'
    });
});

app.use('/eventos', eventoRoutes);
app.use('/participantes', participanteRoutes);

module.exports = app;