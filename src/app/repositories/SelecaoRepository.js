import { consulta } from "../database/conexao.js";

class SelecaoRepository {

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?";
        return consulta(sql, selecao, 'Não foi possível cadastrar!');
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;";
        return consulta(sql, '', 'Não foi possível localizar seleções');
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?;";
        return consulta(sql, id, `Não foi possível localizar a seleção com id ${id}`);
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?";
        return consulta(sql, [selecao, id], `Não foi possível atualizar a seleção com id ${id}`);
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id = ?;";
        return consulta(sql, id, `Não foi possível apagar a seleção com id ${id}`);
    }
}

export default new SelecaoRepository();
