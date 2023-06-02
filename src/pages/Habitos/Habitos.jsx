
import { useState } from "react";
import styled from "styled-components"
import MinhaImagem from '../../assets/14.png';
import Ho from '../../assets/Ellipse 2.png';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

export default function Habitos(props) {

    const { token } = props;
    console.log(token);
    const [clicado, setclicado] = useState('');
    const [habito, sethabito] = useState('');
    const navigate = useNavigate();
    const [qual, setqual] = useState('')
    const [diasClicados, setDiasClicados] = useState({
        D: false,
        S: false,
        T: false,
        Q: false,
        Q: false,
        S: false,
        S: false,
    });

    // presiso chamar a lista antes de tudo
    useEffect(() => {
        // vizualizar abito
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.get(URL, confi);
        // verificar se a data esta fazia
        promise.then(resposta => {
            if (resposta.data.length === 0) {
                console.log('nada');
            } else {
                console.log('tem');
                setqual('1')
            }
            console.log(resposta);
        });

        // promise.catch(resposta => alert('deu errado salvar'));
    }, [Inicio]);

    function Inicio() {

    }

    function Criar(e) {
        e.preventDefault();
        const dados = {
            name: habito,
            days: [1, 2, 3, 4, 5, 6, 7]
        };
        // criar abito
        setclicado('');
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.post(URL, dados, confi);

        promise.then(resposta => Inicio());
        promise.catch(resposta => alert('deu errado'));
    }

    function colorir(dia) {
        setDiasClicados((prevDiasClicados) => ({
            ...prevDiasClicados,
            [dia]: !prevDiasClicados[dia],
        }));
    }

    return (
        <Total>
            <Cabecalho>
                <Slogan>TrackIt </Slogan>
                <Img src={MinhaImagem} />
            </Cabecalho>

            <Topo>
                <Meus> Meus hábitos </Meus>
                <Mais onClick={() => { setclicado('ver'), setqual('') }}>+</Mais>
            </Topo>

            {qual === '' && clicado === '' && (
                <HabitosCadastrados>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </HabitosCadastrados>)}

            {qual === '' && clicado === 'ver' && (
                <>
                    <Preencher>
                        <Form onSubmit={Criar}>
                            <Email
                                type="text"
                                id="habito"
                                required
                                value={habito}
                                onChange={(e) => sethabito(e.target.value)}
                                placeholder="nome do Habito"
                            />
                            <Semana>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["D"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["D"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("D")}> D</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["Seg"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["Seg"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Seg")}> S</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["T"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["T"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("T")}> T</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["Qa"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["Qa"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qa")}> Q</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["Qi"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["Qi"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qi")}> Q</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["Sex"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["Sex"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sex")}> S</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasClicados["Sab"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasClicados["Sab"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sab")}> S</Dias>
                            </Semana>
                            <Finalizar>
                                <Cancelar>
                                    Cancelar
                                </Cancelar>
                                <Salvar  >
                                    Salvar
                                </Salvar>
                            </Finalizar>
                        </Form>

                    </Preencher>
                    <HabitosCadastrados>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </HabitosCadastrados>
                </>
            )}

            {qual === '1' && (
                <Preenche>
                    <Titulo>
                        So pra condifurar
                        <IonIcon icon={trashOutline} className="icon" />
                    </Titulo>
                    <Semana>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["D"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["D"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > D</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["Seg"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["Seg"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > S</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["T"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["T"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > T</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["Qa"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["Qa"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > Q</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["Qi"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["Qi"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > Q</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["Sex"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["Sex"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > S</Dias>
                        <Dias
                            style={{
                                backgroundColor: diasClicados["Sab"] ? "#CFCFCF" : "#FFFFFF",
                                color: diasClicados["Sab"] ? "#FFFFFF" : "#DBDBDB",
                            }}
                        > S</Dias>
                    </Semana>

                </Preenche>
            )}
            <Rodape>
                <Hab to={'/habitos'}> Habitos </Hab>
                <Hoje src={Ho} />
                <Hab to={'/hoje'}> Histórico </Hab>
            </Rodape>
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
 //   background-color: #E5E5E5;
    
`
const Titulo = styled.div`
    width: 310px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    padding-left: 17px;
    display: flex;
    justify-content: space-between;
   // background-color: #e81818;
    
`

const Cabecalho = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Slogan = styled.div`
    width: 200px;
    height: 49px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;

`

const Img = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98px;
    

`
const Topo = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
`
const Meus = styled.div`
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

`
const Mais = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    border: none;

`
const HabitosCadastrados = styled.div`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const Rodape = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Hab = styled(Link)`
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
const Hoje = styled.img`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 98px;
    margin-bottom : 10%;

`
const Preencher = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Preenche = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 50px;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
const Semana = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 11px;
    margin-top: 8px;

`
const Dias = styled.div`
    width: 30px;
    height: 30px;
    background-color:#FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    text-align: center;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Finalizar = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    margin-top: 25px;
    align-items: center;
    justify-content: flex-end;
   
`
const Cancelar = styled.div`
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Salvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`