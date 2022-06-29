
import 'dotenv/config'


import petController from './Controller/petController.js'

import cors from 'cors'
import express from 'express'


const server = express();
server.use(cors());
server.use(express.json());


server.use(petController);


server.listen (process.env.PORT,() =>
            console.log (`Api conctada na porta ${process.env.PORT}`))


export default server