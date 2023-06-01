
import styled from "styled-components";
import MinhaImagem from '../../assets/14.png';
import { IonIcon } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import Ho from '../../assets/Ellipse 2.png';


export default function SuccessPage() {

    return (
        <Total>
            <Cabecalho>
                <Slogan>TrackIt </Slogan>
                <Img src={MinhaImagem} />
            </Cabecalho>
            <Topo>
                <Data>
                    Segunda-feira, 17/05
                </Data>
                <Concluido>
                    Nenhum hábito concluído ainda
                </Concluido>
                <ListaHabitos>
                    <Hab>
                        <Esquerdo>
                            <Titulo>
                                Ler 1 capítulo de livro
                            </Titulo>
                            <Sequencia>
                                Sequência atual: 3 dias<br></br>
                                Seu recorde: 5 dias
                            </Sequencia>
                            
                        </Esquerdo>
                        <Direito>
                            <Quadrado>
                            <IonIcon icon={checkmarkOutline} className="icon" />
                            </Quadrado>
                        </Direito>
                    </Hab>
                </ListaHabitos>
                <Rodape>
                <Habi> Habitos </Habi>
                <Hoje src={Ho} />
                <Habi> Histórico </Habi>
            </Rodape>
            </Topo>

        </Total>
    )
}

const Total = styled.div`

    width: 100%;
    height: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
    
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

`
const Concluido = styled.div`
    width: 278px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;

`
const ListaHabitos = styled.div`
    width: 100%;
    height: 100%;
   
`
const Hab = styled.div`
    width: 100%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
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
const Imagem = styled.img`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    
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
const Habi = styled.div`
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
