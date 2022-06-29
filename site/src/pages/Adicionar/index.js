
import './index.sass'
import {adicionarPet} from '../../api/petApi.js'

import {useState} from 'react'
import {useNavigate } from 'react-router-dom';



export default function Index() {
    const [nome, setNome] = useState('');
    const navigate = useNavigate();
   
    function homeClick (){
        navigate('/')
    }
    function consultarClick() {
        navigate('/Consultar')
      }
      function adicionarClick() {
        navigate('/Adicionar')
      }
 
 
    async function acresentaClick() {
         try{
             const x = await adicionarPet(nome);
             setNome(x)
 
             alert ('Pet adicionado com suscesso!');
 
         }
         catch (err) {
             alert(err.message)
 
     }
 
     }
     return (
    
         <main> 
             
            <div>
                <button onClick={homeClick} >Home</button>
                <button onClick={adicionarClick}>Adicionar</button>
                <button onClick={consultarClick}>Consultar</button>
            </div>
             <div>
                 <h1> cadastre um novo pet</h1>
    
             </div> 
             <div>
                 digite o nome do pet
                 <input type='text' placeholder= 'nome do pet' value={nome} onChange= {e => setNome(e.target.value)}></input>
                 <button onClick={acresentaClick}> adicionar </button>
             </div> 
 
 
         </main>
 
 
 
     )
 }
 