 
import { adicionarPet, buscarPet, listarPets } from "../Repository/petRepository.js"; 

import {Router} from 'express'
const server = Router();

server.post('/Pet', async (req, resp) => {

    try{
        const novoPet= req.body 

        const petAdicionado = await adicionarPet(novoPet);
         
        if(!novoPet.nome)
        throw new Error('Nome do Pet é obrigatório ser adicionado!');


        resp.send(petAdicionado)
        
    }

    catch(err){
            resp.status(400).send({
                erro: err.message
            });
    }
 });

 server.get('/Pet/:id', async (req, resp) => {

        try {
            const {id} = req.params;
            
            const resposta = await buscarPet(id);
    
            if (!resposta)
                resp.status(404).send([])
            else
                resp.send(resposta);
        } catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
    });
 
    
server.get('/Pet', async (req, resp) => {
    try {
        const resposta = await listarPets();
        resp.send(resposta);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;

