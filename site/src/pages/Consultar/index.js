
import './index.sass'
import {buscarPet, listarPets} from '../../api/petApi.js'

import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



export default function Index() {
    const [pets, setPets] = useState([]);
    const [busca, setBusca ] = useState('');
   
    const navigate = useNavigate();


    async function consultaPet() {
        const x =  await buscarPet(busca);
        console.log(x);
        setPets(x);
    }

    async function aparecePets() {
        const x =  await listarPets();
        setPets(x);
    }
    useEffect(() =>{
          aparecePets();
    }, [])



    function homeClick (){
        navigate('/')
    }

    function consultarClick() {
        navigate('/Consultar')
      }
    
  function adicionarClick() {
        navigate('/Adicionar')
      }

 
     
  return (
    
         <main> 
             
            <div>
                <button onClick={homeClick} >Home</button>
                <button onClick={adicionarClick}>Adicionar</button>
                <button onClick={consultarClick} >Consultar</button>
            </div>

           <div>
            <input type='text' placeholder= 'digite o número de identificação do pet' value={busca} onChange= {e =>setBusca(e.target.value)} ></input>
            <button onClick={consultaPet}> buscar </button>
           </div>
           <div>
                <table>
                    <thead> 
                        <tr>
                            <th> IDENTIFICAÇÃO</th>
                            <th> NOME </th>
                        </tr>
                    </thead>
                    <tbody>

                        {pets.map(item =>
                            
                            <tr>
                                <td>
                                    #{item.id}
                                </td>
                                <td> 
                                {item.nome}
                                </td>
                            </tr>   
                            
                        )}

                    </tbody>
                </table>
            </div>
        </main>
    );
}