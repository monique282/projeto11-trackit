import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Inicial/Login";
import Cadastro from "./pages/Inicial/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje";
import Historico from "./pages/Historico/Historico";
import AuthProvider from "./pages/Contex/Sose"




export default function App() {

    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Login  />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/habitos' element={<Habitos  />} />
                    <Route path='/hoje' element={<Hoje />} />
                    <Route path='/historico' element={<Historico />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    left: 0px;
   
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
