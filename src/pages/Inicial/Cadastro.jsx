import { useState } from "react";
import styled from "styled-components"
import MinhaImagem from '../../assets/Group 8.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Rota() {

    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [nome, setnome] = useState('');
    const [foto, setfoto] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function mandarProServidor(e) {
        e.preventDefault();
        const dados = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }

        const urlDados = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const promise = axios.post(urlDados, dados);
        setLoading(true);
        
        promise.then(resposta => navigate("/", {
            
        }));
        promise.catch(respota => {
            setLoading(false);
            setTimeout(() => {
                alert('deu errado');
            }, 5000);
         
        });
    }

    





return (
    <Total>
        <Slogan src={MinhaImagem} />
        <Form onSubmit={mandarProServidor}>
            <Email
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="email"
            />
            <Email
                type="password"
                id="senha"
                required
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
                placeholder="senha"
            />
            <Email
                type="text"
                id="nome"
                required
                value={nome}
                onChange={(e) => setnome(e.target.value)}
                placeholder="nome"
            />
            <Email
                type="text"
                id="foto"
                required
                value={foto}
                onChange={(e) => setfoto(e.target.value)}
                placeholder="foto"
            />
            <Entrar disabled={loading} >

                {loading ? (
                    <ThreeDots type="Oval" color="#FFFFFF" height={20} width={40} />
                ) : (
                    'Cadastrar'
                )}
            </Entrar>
        </Form>
        <Login to={'/'} >Já tem uma conta? Faça login!</Login>
    </Total>
)
}

const Total = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Slogan = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
    margin-bottom: 27px;

`
const Email = styled.input`
    width: 303px;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-top: 6px;
    
    ::placeholder { 
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px; 
    color: #DBDBDB;
  }
`
const Entrar = styled.button`
    width: 319px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 6px;
    border: none;

`
const Login = styled(Link)`
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    
`
