import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function adicionarPet(nome) {
    const resposta = await api.post('/Pet', {
       nome:nome
    });

    return resposta.data;

}

export async function buscarPet(id) {
    const resposta = await api.get(`/Pet/:id=${id}`);

    return resposta.data;
} 

export async function listarPets(){    
    const resposta = await api.get(`/Pet`);

    return resposta.data;
}

