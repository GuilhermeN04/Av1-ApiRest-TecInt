const supabase = require('../config/supabase');

// CREATE
const criarParticipante = async (req, res) => {
    try {
        const {
            nome,
            email,
            telefone,
            cpf,
            data_nascimento,
            cidade,
            evento_id
        } = req.body;

        const { data, error } = await supabase
            .from('participantes')
            .insert([
                {
                    nome,
                    email,
                    telefone,
                    cpf,
                    data_nascimento,
                    cidade,
                    evento_id
                }
            ])
            .select();

        if (error) {
            return res.status(400).json({
                erro: error.message
            });
        }

        res.status(201).json(data[0]);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};


// READ - todos
const listarParticipantes = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('participantes')
            .select(`
                *,
                eventos (
                    nome,
                    data,
                    local
                )
            `);

        if (error) {
            return res.status(400).json({
                erro: error.message
            });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};


// READ - por ID
const buscarParticipante = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('participantes')
            .select(`
                *,
                eventos (
                    nome,
                    data,
                    local
                )
            `)
            .eq('id', id)
            .single();

        if (error) {
            return res.status(404).json({
                erro: 'Participante não encontrado'
            });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};


// UPDATE
const atualizarParticipante = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            nome,
            email,
            telefone,
            cpf,
            data_nascimento,
            cidade,
            evento_id
        } = req.body;

        const { data, error } = await supabase
            .from('participantes')
            .update({
                nome,
                email,
                telefone,
                cpf,
                data_nascimento,
                cidade,
                evento_id
            })
            .eq('id', id)
            .select();

        if (error || data.length === 0) {
            return res.status(404).json({
                erro: 'Participante não encontrado'
            });
        }

        res.status(200).json(data[0]);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};


// DELETE
const excluirParticipante = async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from('participantes')
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(400).json({
                erro: error.message
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};


module.exports = {
    criarParticipante,
    listarParticipantes,
    buscarParticipante,
    atualizarParticipante,
    excluirParticipante
};