import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MinhaImagem from '../../assets/Group 8.png';
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../Contex/Sose";


export default function Login() {

    const { settoken, setimage } = useContext(AuthContext);
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabledInputs, setDisabledInputs] = useState(false);
    const navigate = useNavigate();

    function mandarProServidor(e) {
        setLoading(true);
        setDisabledInputs(true);
        e.preventDefault();
        const dados = {
            email: email,
            password: senha
        }
        const urlDados = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const promise = axios.post(urlDados, dados);
        promise.then(resposta => {
            setimage(resposta.data.image);
            settoken(resposta.data.token);
            navigate("/hoje");
        });

        promise.catch(resposta => {
            setLoading(false);
            setDisabledInputs(false);
            alert(resposta.response.data.message);
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
                    disabled={disabledInputs}
                    data-test="email-input"
                />
                <Email
                    type="password"
                    id="senha"
                    required
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                    placeholder="senha"
                    disabled={disabledInputs}
                    data-test="password-input"
                />
                <Entrar disabled={loading || disabledInputs} data-test="login-btn">
                    {loading ? (
                        <ThreeDots
                            color="#FFFFFF"
                            height={20}
                            width={40}
                            visible={true}
                            style={{ flex: "1", width: "100%" }}/>
                    ) : (
                        'Entrar'
                    )}
                </Entrar>
            </Form>
            <Cadastrar to={'/cadastro'} data-test="signup-link" >Não tem uma conta? Cadastre-se!</Cadastrar>
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
    margin-bottom: 0px; 
    
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
    width: 303px;
    height: 45px;
    background-color: #52B6FF; 
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 6px;
    border: none;

`
const Cadastrar = styled(Link)`
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