const supabase = require('../config/supabase');

const criarEvento = async (req, res) => {
    try {
        const {
            nome,
            descricao,
            data,
            horario,
            local,
            categoria,
            capacidade
        } = req.body;

        const { data: evento, error } = await supabase
            .from('eventos')
            .insert([
                {
                    nome,
                    descricao,
                    data,
                    horario,
                    local,
                    categoria,
                    capacidade
                }
            ])
            .select();

        if (error) {
            return res.status(400).json({
                erro: error.message
            });
        }

        res.status(201).json(evento[0]);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};



const listarEventos = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('eventos')
            .select('*')
            .order('data', { ascending: true });

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



const buscarEvento = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('eventos')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            return res.status(404).json({
                erro: 'Evento não encontrado'
            });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};



const atualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            nome,
            descricao,
            data,
            horario,
            local,
            categoria,
            capacidade
        } = req.body;

        const { data: evento, error } = await supabase
            .from('eventos')
            .update({
                nome,
                descricao,
                data,
                horario,
                local,
                categoria,
                capacidade
            })
            .eq('id', id)
            .select();

        if (error || evento.length === 0) {
            return res.status(404).json({
                erro: 'Evento não encontrado'
            });
        }

        res.status(200).json(evento[0]);

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });
    }
};



const excluirEvento = async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from('eventos')
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
    criarEvento,
    listarEventos,
    buscarEvento,
    atualizarEvento,
    excluirEvento
};