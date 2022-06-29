import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Adicionar from './pages/Adicionar'
import Consultar from './pages/Consultar'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home/>} />
                <Route path='/Adicionar' element={< Adicionar/>} />
                <Route path='/Consultar' element={< Consultar/>} />
            </Routes>
        </BrowserRouter>
    )
}