const express = require('express');

const {
    criarParticipante,
    listarParticipantes,
    buscarParticipante,
    atualizarParticipante,
    excluirParticipante
} = require('../controllers/participanteController');

const router = express.Router();

router.post('/', criarParticipante);

router.get('/', listarParticipantes);

router.get('/:id', buscarParticipante);

router.put('/:id', atualizarParticipante);

router.delete('/:id', excluirParticipante);

module.exports = router;