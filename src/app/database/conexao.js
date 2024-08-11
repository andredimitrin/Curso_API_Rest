import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'bdcopa'
});

conexao.connect();

/**
 * Executa uma consulta SQL com ou sem valores.
 * @param {string} sql - Instrução SQL a ser executada.
 * @param {string | array} [valores=''] - Valores a serem passados para o SQL.
 * @param {string} mensagemReject - Mensagem a ser exibida em caso de erro.
 * @returns {Promise} - Retorna uma promessa com o resultado da consulta ou uma mensagem de erro.
 */
export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) {
                console.error(mensagemReject, error);
                return reject(mensagemReject);
            }
            return resolve(result);
        });
    });
};

export default conexao;
