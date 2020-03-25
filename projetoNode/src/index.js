const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);








































/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informaçao do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informacao no back-end
 */



 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos (Algo de somente um usuario)
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * Tipos de BD:
   * 
   * SQL: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft, SQLite, etc.
   * NoSQL: MongoDB, CouchDB, etc.
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

