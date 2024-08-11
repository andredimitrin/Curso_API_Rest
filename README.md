# Projeto API de Seleções

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciar seleções de um banco de dados relacionado à Copa do Mundo. A aplicação permite criar, visualizar, atualizar e excluir seleções usando um banco de dados MySQL.

## Funcionalidades

- **Criar Seleção**: Adiciona uma nova seleção ao banco de dados.
- **Listar Seleções**: Retorna todas as seleções cadastradas no banco de dados.
- **Visualizar Seleção**: Retorna uma seleção específica com base no ID.
- **Atualizar Seleção**: Atualiza as informações de uma seleção específica.
- **Excluir Seleção**: Remove uma seleção do banco de dados.

## Estrutura do Projeto

O projeto é organizado em uma estrutura MVC (Model-View-Controller) para facilitar a manutenção e a escalabilidade.

- **`controllers/`**: Contém os controladores responsáveis por lidar com as requisições HTTP.
- **`repositories/`**: Contém os repositórios que fazem a comunicação direta com o banco de dados.
- **`database/`**: Contém a configuração da conexão com o banco de dados e uma função auxiliar para executar consultas SQL.
- **`app.js`**: Arquivo principal para configurar e iniciar o servidor Express.

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente:

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configuração do Banco de Dados:

- Certifique-se de ter o MySQL instalado e em execução.
- Crie um banco de dados chamado `bdcopa`.
- Configure as credenciais do banco de dados no arquivo `database/conexao.js`.

### 4. Executar as Migrações (Opcional):

Crie a tabela `selecoes` no banco de dados utilizando o seguinte comando SQL:

```sql
CREATE TABLE selecoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    continente VARCHAR(255) NOT NULL,
    titulos INT NOT NULL
);
```

### 5. Inicie o servidor:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Endpoints

Aqui estão os principais endpoints da API:

- **GET /selecoes**: Retorna todas as seleções.
- **GET /selecoes/:id**: Retorna uma seleção específica pelo ID.
- **POST /selecoes**: Cria uma nova seleção.
- **PUT /selecoes/:id**: Atualiza uma seleção existente pelo ID.
- **DELETE /selecoes/:id**: Exclui uma seleção pelo ID.

## Exemplo de Requisição

### Criar uma nova seleção

**Requisição:**

```http
POST /selecoes
Content-Type: application/json

{
    "nome": "Brasil",
    "continente": "América do Sul",
    "titulos": 5
}
```

**Resposta:**

```json
{
    "id": 1,
    "nome": "Brasil",
    "continente": "América do Sul",
    "titulos": 5
}
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework web para Node.js.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **JavaScript (ES6+)**: Linguagem de programação principal usada no projeto.
