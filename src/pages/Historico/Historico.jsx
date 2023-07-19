
import styled from "styled-components";
import Acima from "../Acima/Acima";
import Abaixo from "../Abaixo/Abaixo";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contex/Sose";

export default function Historico() {
    const { token } = useContext(AuthContext);
    const [salvarclicked, setsalvarclicked] = useState(false);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily'
        const conf = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, conf);

        promise.then(resposta => {

        });
        promise.catch(resposta => alert(resposta.response.data.message));

    }, [salvarclicked]);

    return (
        <Total>
            <Acima />
            <Topo>
                Histórico
            </Topo>
            <ListaHabitos>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </ListaHabitos>
            <Abaixo />
        </Total>
    )
}
const Total = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
    
`
const Topo = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 17px;
`

const ListaHabitos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 150px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-left: 17px;
   
`



