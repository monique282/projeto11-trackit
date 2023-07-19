
import { useState } from "react";
import Acima from "../Acima/Acima";
import Abaixo from "../Abaixo/Abaixo";
import axios from "axios";
import styled from 'styled-components';
import { useEffect } from "react";
import { IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useContext } from "react";
import { AuthContext } from "../Contex/Sose"
import { ThreeDots } from "react-loader-spinner";

export default function Habitos() {

    const { token } = useContext(AuthContext);
    const [clicado, setclicado] = useState('');
    const [habito, sethabito] = useState('');
    const [qual, setqual] = useState('');
    const [lista, setlista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disabledInputs, setDisabledInputs] = useState(false);
    const [salvarclicked, setsalvarclicked] = useState(false);
    const [diasclicados, setdiasclicados] = useState({
        D: false,
        Seg: false,
        T: false,
        Qa: false,
        Qi: false,
        Sex: false,
        Sab: false,
    });
    const diasmap = {
        D: 0,
        Seg: 1,
        T: 2,
        Qa: 3,
        Qi: 4,
        Sex: 5,
        Sab: 6,
    };

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.get(URL, confi);
        promise.then(resposta => {
            if (resposta.data.length === 0) {
                console.log('nada');
                setqual('');
            } else {
                console.log(resposta.data);
                setlista(resposta.data);
                setqual('1');
            }
        });
        setsalvarclicked(false);
        setdiasclicados({
            D: false,
            Seg: false,
            T: false,
            Qa: false,
            Qi: false,
            Sex: false,
            Sab: false,
        })
    }, [salvarclicked]);

    function Criar(e) {
        e.preventDefault();
        setLoading(true);
        setDisabledInputs(true);
        if (habito.trim() === '') {
            alert('O campo não foi preenchido. Por favor, insira um nome para o hábito.');
            setDisabledInputs(false)
            setLoading(false)
            return;
        }
        const diasselecionados = Object.keys(diasclicados).filter((dia) => diasclicados[dia]);
        const diasnumeros = diasselecionados.map((dia) => diasmap[dia]);
        console.log(diasselecionados);
        console.log(diasnumeros);
        const dados = {
            name: habito,
            days: diasnumeros
        };

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.post(URL, dados, confi);
        promise.then(resposta => {
            setLoading(false),
            setDisabledInputs(false),
            setsalvarclicked(true),
            setclicado(''),
            sethabito('')
        });
        promise.catch(resposta => {
            alert(resposta.response.data.message),
                setLoading(false),
                setDisabledInputs(false)
        });
    }
    function colorir(dia) {
        setdiasclicados((prevdiasclicados) => ({
            ...prevdiasclicados,
            [dia]: !prevdiasclicados[dia],
        }));
    };

    function Tenho(id) {
        const conf = window.confirm('Desejar deletar hábito?');
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(url, confi);
        promise.then(resposta => {
            setsalvarclicked(true);
        })
        promise.catch(error => {
            console.error('Ocorreu um erro ao enviar a requisição DELETE:', error);
        });
    };

    return (
        <Total >
            <Acima />
            <Topo>
                <Meus> Meus hábitos </Meus>
                <Mais onClick={() => { setclicado('ver'), setqual('') }} data-test="habit-create-btn" >+</Mais>
            </Topo>
            {qual === '' && clicado === '' && (
                <HabitosCadastrados>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </HabitosCadastrados>)}
            {qual === '' && clicado === 'ver' && (
                <>
                    <Preencher data-test="habit-create-container">
                        <Form onSubmit={Criar}>
                            <Email
                                type="text"
                                id="habito"
                                value={habito}
                                onChange={(e) => sethabito(e.target.value)}
                                placeholder="nome do Habito"
                                disabled={disabledInputs}
                                data-test="habit-name-input"
                            />
                            <Semana>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["D"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["D"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("D")} data-test="habit-day"
                                    disabled={disabledInputs} >  D
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Seg"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Seg"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Seg")} data-test="habit-day"
                                    disabled={disabledInputs}> S
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["T"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["T"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("T")} data-test="habit-day"
                                    disabled={disabledInputs}> T
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Qa"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Qa"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qa")} data-test="habit-day" disabled={disabledInputs}>  Q
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Qi"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Qi"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qi")} data-test="habit-day" disabled={disabledInputs}> Q
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Sex"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Sex"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sex")} data-test="habit-day" disabled={disabledInputs}> S
                                </Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Sab"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Sab"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sab")} data-test="habit-day" disabled={disabledInputs}> S
                                </Dias>
                            </Semana>
                            <Finalizar>
                                <Cancelar disabled={disabledInputs} onClick={() => { setsalvarclicked(true), setclicado('') }} data-test="habit-create-cancel-btn">
                                    Cancelar
                                </Cancelar>
                                <Salvar disabled={loading || disabledInputs} data-test="habit-create-save-btn">
                                    {loading ? (
                                        <ThreeDots type="Oval" color="#FFFFFF" height={20} width={40} />
                                    ) : (
                                        ' Salvar'
                                    )}
                                </Salvar>
                            </Finalizar>
                        </Form>
                    </Preencher>
                    <TodosHabitos>
                        {
                            lista.map(lista => (
                                <Preenche key={lista.id} data-test="habit-container">
                                    <Titulo data-test="habit-name">
                                        {lista.name}
                                        <IonIcon
                                            onClick={() => {
                                                Tenho(lista.id),
                                                    setsalvarclicked(true)
                                            }}
                                            icon={trashOutline}
                                            className="icon"
                                            data-test="habit-delete-btn"
                                        />
                                    </Titulo>
                                    <Semana>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["D"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["D"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > D</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["Seg"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["Seg"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > S</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["T"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["T"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > T</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["Qa"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["Qa"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > Q</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["Qi"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["Qi"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > Q</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["Sex"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["Sex"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > S</Dias>
                                        <Dias data-test="habit-day"
                                            style={{
                                                backgroundColor: lista.days.includes(diasmap["Sab"]) ? "#CFCFCF" : "#FFFFFF",
                                                color: lista.days.includes(diasmap["Sab"]) ? "#FFFFFF" : "#DBDBDB",
                                            }}
                                        > S</Dias>
                                    </Semana>
                                </Preenche>))
                        }
                    </TodosHabitos>
                </>
            )}

            {qual === '1' && (
                <TodosHabitos>
                    {
                        lista.map(lista => (
                            <Preenche key={lista.id} data-test="habit-container">
                                <Titulo data-test="habit-name">
                                    {lista.name}
                                    <IonIcon
                                        onClick={() => {
                                            Tenho(lista.id),
                                                setsalvarclicked(true)
                                        }}
                                        icon={trashOutline}
                                        className="icon"
                                        data-test="habit-delete-btn"
                                    />
                                </Titulo>
                                <Semana>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["D"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["D"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > D</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Seg"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Seg"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["T"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["T"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > T</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Qa"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Qa"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > Q</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Qi"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Qi"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > Q</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Sex"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Sex"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                    <Dias data-test="habit-day"
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Sab"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Sab"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                </Semana>
                            </Preenche>))
                    }
                </TodosHabitos>
            )}
            <Abaixo />
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
    background-color: #E5E5E5;
    position: relative; 
   
`
const Titulo = styled.div`
    width: 340px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 20px;
    padding-left: 17px;
    display: flex;
    justify-content: space-between;
    //background-color: #e81818;
    padding: 10px;

    .icon {
        width: 20px;
        height: 25px;
        color: #121010;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    
`
const Topo = styled.div`
    width: 98%;
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
const Preencher = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 50px;
 
`
const Preenche = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

`
const TodosHabitos = styled.div`
    margin-bottom: 150px;

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
    margin-top: 15px;
    margin-bottom: 3px;
    
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
    width: 303px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 11px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;

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
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
    text-align: center;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Finalizar = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    margin-top: 10px;
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
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

`
