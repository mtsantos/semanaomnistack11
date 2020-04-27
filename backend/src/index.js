const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Busca/lista uam informação do back-end
  * POST: Criar uam informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uam informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
   * Route params: Parâmetros ultilizados para identificar recursos
   * Request Body:
   */

   /**
    * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */


app.listen(3333); 