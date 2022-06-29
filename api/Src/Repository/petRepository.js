

import {con} from './Connetion.js'


export async function adicionarPet(pet) {

    const comando = 
          `insert into TB_Pet (NM_Pet)
                value (?);`

  const [resposta] = await con.query(comando, [pet.nome]);
     pet.id = resposta.insertId;
  
    return pet;

}

export async function  buscarPet (id) {
     
  const comando = 
        `
        select ID_Pet        id,
               NM_Pet        nome
          from TB_Pet
         Where ID_Pet        = ?;
           
        
        `
        const [linhas] = await con.query(comando, [id])
        return linhas[0];
        
}

export async function listarPets() {

  const comando = 
            `
          select ID_Pet        id,
          NM_Pet        nome
          from TB_Pet;
 `
            const [linhas] = await con.query(comando)
            return linhas;
                   

}




