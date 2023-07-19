
import { useContext } from "react";
import {AuthContext} from "../Contex/Sose"
import styled from "styled-components";

export default function Acima() {
    const {image} = useContext(AuthContext);

    return (
        <Cabecalho data-test="header">
            <Slogan>TrackIt </Slogan>
            <Img src={image} data-test="avatar"/>
        </Cabecalho>
    )
}

const Cabecalho = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 600;

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
