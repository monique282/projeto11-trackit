import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Inicial/Login";
import Cadastro from "./pages/Inicial/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import HabitosCompletos from "./pages/Habitos/HabitosCompletos";
import Hoje from "./pages/Hoje/Hoje";
import { useState } from "react";




export default function App() {

    const [token, settoken] = useState('');
    return (
        <BrowserRouter>
          
            <Routes>
                <Route path='/' element={<Login settoken={settoken}/> }  />
                <Route path='/cadastro' element={<Cadastro  />} />
                <Route path='/habitos' element={<Habitos token={token} />} />
                <Route path='/habitosC' element={<HabitosCompletos token={token} />} />
                <Route path='/hoje' element={<Hoje token={token} />} />


            </Routes>

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
