import salvarFilmeService from '../service/filme/salvarFilmeService.js';
import consultarFilmesService from '../service/filme/consultarFilmes.js';

import { Router } from 'express';
const endpoints = Router()

endpoints.post('/filme', async (req, resp) => {

    try {
      //leitura
       let filmeObj = req.body;

        //procesamento (service)
        let id = salvarFilmeService(filmeObj);
        
        // saída response
        resp.send({
            id: id
       })

    } 

    catch (err) {
      
        logErro(err);
      resp.status(400).send(criarErro(err));

      
    }
    
})

endpoints.get('/filme', async (req, resp) => {
  try {
     let nome = req.query.nome;
     let registros = await consultarFilmesService(nome);

     resp.send(registros);
  }
  catch (error) {
     logErro(err);
     resp.status(400).send(criarErro(err));
  }
})

export default  endpoints; 