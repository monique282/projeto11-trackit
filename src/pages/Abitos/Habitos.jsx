
import { useState } from "react";
import styled from "styled-components"
import MinhaImagem from '../../assets/14.png';
import Ho from '../../assets/Ellipse 2.png';

export default function Habitos() {
    const [clicado, setclicado] = useState('');
    const [habito, sethabito] = useState('');
    const [diasClicados, setDiasClicados] = useState({
        D: false,
        S: false,
        T: false,
        Q: false,
        Q: false,
        S: false,
        S: false,
    });
    

    function Criar() {
        alert('deu certo');
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
                <Mais onClick={() => setclicado('ver')}>+</Mais>
            </Topo>

            {clicado === 'ver' && (
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
                    </Form>
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
                        <Salvar>
                            Salvar
                        </Salvar>
                    </Finalizar>
                </Preencher>
            )}
            <HabitosCadastrados>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </HabitosCadastrados>

            <Rodape>
                <Hab> Habitos </Hab>
                <Hoje src={Ho} />
                <Hab> Histórico </Hab>
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
const Hab = styled.div`
    width: 68px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
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
const Salvar = styled.div`
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
`