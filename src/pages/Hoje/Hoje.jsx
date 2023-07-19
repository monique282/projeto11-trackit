
import styled from "styled-components";
import { IonIcon } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import Acima from "../Acima/Acima";
import Abaixo from "../Abaixo/Abaixo";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { AuthContext } from "../Contex/Sose"
import 'dayjs/locale/pt-br';

export default function HojeA() {
    const { token, concluidos, setconcluidos } = useContext(AuthContext);
    const [lista, setlista] = useState([]);
    const [salvarclicked, setsalvarclicked] = useState(false);
    const [porcenta, setporcenta] = useState([]);
    //retorna a primeira letra maiuscula
    const capitalizeFirstLetter = (string) => { return string.charAt(0).toUpperCase() + string.slice(1); };
    const [day, setDay] = useState(capitalizeFirstLetter(dayjs().locale('pt-br').format('dddd, DD/MM')));
    const [total, settotal] = useState();

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const conf = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, conf);
        promise.then(resposta => {
            console.log(resposta.data);
            setlista(resposta.data)
            setsalvarclicked(false);
            const porcentaArray = resposta.data.map(item => item.done);
            const trueCount = porcentaArray.filter(value => value === true).length;
            const arredondado = Math.ceil((trueCount / resposta.data.length) * 100);
            console.log(arredondado);
            setconcluidos(arredondado);
            settotal(resposta.data.length);
        });
        promise.catch(resposta => alert(resposta.response.data.message));
    }, [salvarclicked]);

    console.log(porcenta)

    function Marcar(id) {
        console.log(id);
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const conf = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, null, conf);
        promise.then(resposta => {
            console.log(resposta);
            setsalvarclicked(true);
        });
        promise.catch(resposta => {
            Desmarcar(id);
        });
    }

    function Desmarcar(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const conf = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, null, conf);
        promise.then(resposta => {
            console.log(resposta);
            setsalvarclicked(true);
        });
        promise.catch(resposta => alert('deu errado hoje desmarcar'));
    };

    return (
        <Total>
            <Acima />
            <Topo>
                <Data data-test="today">
                    {day}
                </Data>
                <Concluido data-test="today-counter">
                    {total === 0 && (<p>Nenhum hábito concluído ainda</p>)}
                    {concluidos === 0 && (<p>Nenhum hábito concluído ainda</p>)}
                    {concluidos !== 0 && total !== 0 && (<h1> {concluidos}% doas hábitos concluidos</h1>)}
                </Concluido>
            </Topo>

            <ListaHabitos>
                {lista.map(lista => (
                    <Hab key={lista.id} data-test="today-habit-container" >
                        <Esquerdo>
                            <Titulo data-test="today-habit-name">
                                {lista.name}
                            </Titulo>
                            <Sequencia>
                                <p data-test="today-habit-sequence">
                                    Sequência atual: <span style={{ color: lista.done ? "#8FC549" : "#666666" }}>
                                        {lista.currentSequence} dias</span>
                                </p> 
                                <br></br>
                                {(lista.highestSequence) > 0 && (
                                    <p data-test="today-habit-record">
                                        Seu recorde: <span style={{ color: (lista.currentSequence) === (lista.highestSequence) && lista.done ? "#8FC549" : "#666666" }}>
                                            {lista.highestSequence} dias </span>
                                    </p>
                                )}
                                {(lista.highestSequence) === 0 && (
                                    <p data-test="today-habit-record">
                                        Seu recorde: <span style={{ color: "#666666" }}>
                                            {lista.highestSequence} dias </span>
                                    </p>
                                )}
                            </Sequencia>
                        </Esquerdo>
                        <Direito>
                            <Quadrado onClick={() => { Marcar(lista.id) }} data-test="today-habit-check-btn">
                                <IonIcon
                                    style={{
                                        backgroundColor: lista.done ? "#8FC549" : "#EBEBEB"
                                    }}
                                    icon={checkmarkOutline}
                                    className="icon"
                                />
                            </Quadrado>
                        </Direito>
                    </Hab>
                ))
                }
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
    
`
const Data = styled.div`
    width: 100%;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 10px;

`
const Concluido = styled.div`
    width: 278px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin-left: 10px;
    h1{
    width: 278px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;  
    }

`
const ListaHabitos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 150px;
   
`
const Hab = styled.div`
    width: 98%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
   
`
const Esquerdo = styled.div`
    width: 100%;
    height: 100%;
`
const Titulo = styled.div`
    width: 250px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
    margin-top: 10px;
    margin-left: 20px;
`
const Sequencia = styled.div`
    width: 250px;
    height: 40px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px
    line-height: 16px;
    color: #666666;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 20px;

`
const Direito = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    
`
const Quadrado = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-right: 10px;
    .icon {
        width: 100%;
        height: 100%;
        background-color: #e7eae6;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

`


