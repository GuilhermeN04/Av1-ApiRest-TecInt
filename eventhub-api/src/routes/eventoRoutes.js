const express = require('express');

const {
    criarEvento,
    listarEventos,
    buscarEvento,
    atualizarEvento,
    excluirEvento
} = require('../controllers/eventoController');

const router = express.Router();

router.post('/', criarEvento);

router.get('/', listarEventos);

router.get('/:id', buscarEvento);

router.put('/:id', atualizarEvento);

router.delete('/:id', excluirEvento);

module.exports = router;