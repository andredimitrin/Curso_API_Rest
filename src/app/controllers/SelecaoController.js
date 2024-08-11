import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {

    async index(req, res) {
        try {
            const rows = await SelecaoRepository.findAll();
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ message: "Erro ao localizar seleções", error });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const row = await SelecaoRepository.findById(id);
            if (!row.length) {
                return res.status(404).json({ message: "Seleção não encontrada" });
            }
            res.status(200).json(row[0]); // Retorna o primeiro registro encontrado
        } catch (error) {
            res.status(500).json({ message: "Erro ao localizar seleção", error });
        }
    }

    async store(req, res) {
        try {
            const selecao = req.body;
            const result = await SelecaoRepository.create(selecao);
            res.status(201).json({ id: result.insertId, ...selecao });
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar seleção", error });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const selecao = req.body;
            const result = await SelecaoRepository.update(selecao, id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Seleção não encontrada para atualização" });
            }
            res.status(200).json({ id, ...selecao });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar seleção", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const result = await SelecaoRepository.delete(id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Seleção não encontrada para exclusão" });
            }
            res.status(200).json({ message: "Seleção excluída com sucesso", id });
        } catch (error) {
            res.status(500).json({ message: "Erro ao excluir seleção", error });
        }
    }
}

export default new SelecaoController();
