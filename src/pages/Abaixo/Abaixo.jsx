import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import {AuthContext} from "../Contex/Sose"

export default function Abaixo() {
    const {concluidos} = useContext(AuthContext);

    return (

        <Rodape  data-test="menu" >
            <Habi to={'/habitos'} data-test="habit-link" > Habitos </Habi>
            <Hoje to={'/hoje'} data-test="today-link" >
                <CircularProgressbar
                    value={concluidos}
                    text="Hoje"
                    strokeWidth={10}
                    styles={{
                        path: { stroke: '#FFFFFF' },
                        trail: { stroke: '#52B6FF' },
                        text: { fill: '#FFFFFF',
                         fontSize: '18px',
                         fontWeight: 400, 
                         lineHeight: '22px',
                         fontFamily: 'Lexend Deca' },
                    }}
                />
            </Hoje>
            <Habi to={'/historico'} data-test="history-link" > Histórico </Habi>
        </Rodape>

    )
}
const Rodape = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 200px;
`
const Habi = styled(Link)`
    width: 68px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    text-decoration: none;
`
const Hoje = styled(Link)`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 98px;
    margin-bottom : 5%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;

    

`