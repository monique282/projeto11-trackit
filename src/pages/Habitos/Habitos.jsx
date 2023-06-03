
import { useState } from "react";
import styled from "styled-components"
import MinhaImagem from '../../assets/14.png';
import Ho from '../../assets/Ellipse 2.png';
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

export default function Habitos(props) {

    const { token } = props;
    const [clicado, setclicado] = useState('');
    const [habito, sethabito] = useState('');
    const [qual, setqual] = useState('');
    const [lista, setlista] = useState([]);
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
        D: 1,
        Seg: 2,
        T: 3,
        Qa: 4,
        Qi: 5,
        Sex: 6,
        Sab: 7,
    };

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
                setqual('')
            } else {
                // console.log(lista);
                console.log(resposta.data);
                //  console.log(resposta.data.days);
                setlista(resposta.data)
                // console.log(lista.days)
                setqual('1')
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
        // promise.catch(resposta => alert('deu errado salvar'));
    }, [salvarclicked]);

    

    function Criar(e) {
        e.preventDefault();
        const diasselecionados = Object.keys(diasclicados).filter((dia) => diasclicados[dia]);
        const diasnumeros = diasselecionados.map((dia) => diasmap[dia]);
        console.log(diasselecionados);
        console.log(diasnumeros);
        const dados = {
            name: habito,
            days: diasnumeros
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
        promise.then(resposta => console.log(resposta));
        promise.catch(resposta => alert('deu errado'));
    }

    function colorir(dia) {
        setdiasclicados((prevdiasclicados) => ({
            ...prevdiasclicados,
            [dia]: !prevdiasclicados[dia],
        }));
    };

    function Deletar (id) {
        
        console.log(id);
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(url, confi);
          promise.then(resposta => {
            setsalvarclicked(true);

            console.log('Requisição DELETE enviada com sucesso!');
            console.log('Status:', resposta.status);
          })
          promise.catch(error => {
            console.error('Ocorreu um erro ao enviar a requisição DELETE:', error);
          });
      };

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
                                        backgroundColor: diasclicados["D"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["D"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("D")}> D</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Seg"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Seg"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Seg")}> S</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["T"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["T"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("T")}> T</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Qa"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Qa"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qa")}> Q</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Qi"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Qi"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Qi")}> Q</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Sex"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Sex"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sex")}> S</Dias>
                                <Dias
                                    style={{
                                        backgroundColor: diasclicados["Sab"] ? "#CFCFCF" : "#FFFFFF",
                                        color: diasclicados["Sab"] ? "#FFFFFF" : "#DBDBDB",
                                    }}
                                    onClick={() => colorir("Sab")}> S</Dias>
                            </Semana>
                            <Finalizar>
                                <Cancelar>
                                    Cancelar
                                </Cancelar>
                                <Salvar onClick={() => setsalvarclicked(true)}>
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
                <>
                    {
                        lista.map(lista => (
                            <Preenche key={lista.id}>
                                <Titulo>
                                    {lista.name}
                                    {lista.days}
                                    <IonIcon
                                    onClick={() => Deletar(lista.id)} 
                                    icon={trashOutline} 
                                    className="icon"
                                     />
                                </Titulo>
                                <Semana>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["D"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["D"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > D</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Seg"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Seg"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["T"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["T"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > T</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Qa"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Qa"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > Q</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Qi"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Qi"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > Q</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Sex"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Sex"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                    <Dias
                                        style={{
                                            backgroundColor: lista.days.includes(diasmap["Sab"]) ? "#CFCFCF" : "#FFFFFF",
                                            color: lista.days.includes(diasmap["Sab"]) ? "#FFFFFF" : "#DBDBDB",
                                        }}
                                    > S</Dias>
                                </Semana>

                            </Preenche>))
                    }
                </>

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
    background-color: #E5E5E5;
    
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
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1000px;

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
    margin-bottom: 50px;
    //background-color: #e95119;

`
const Preenche = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    //background-color: #e95119;

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