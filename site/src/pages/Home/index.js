

import './index.sass'

import { navigate, useNavigate } from 'react-router-dom';


export default function Index() {
   
    const navigate = useNavigate();
   
    function consultarClick() {
        navigate('/Consultar')
      }
      function adicionarClick() {
        navigate('/Adicionar')
      }
   

    return (
   
        <main> 
        <div>
            <h1> seja bem-vindo!</h1>
            <p> o que deseja fazer?</p>
          <div>
                <button  onClick={consultarClick} >
                   Consultar um pet 
                </button>
                <button  onClick={adicionarClick} >
                 Adicionar um novo pet
                </button>
           </div> 
        </div>
            
        

        </main>



    )
}
