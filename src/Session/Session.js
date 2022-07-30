import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from './Form'
import Title from '../Title/Title'
import Legenda from '../Legenda/Legenda'
import Seats from "../Seats/Seats";

const assentoSelecionadoStyle = { backgroundColor: "#8DD7CF", border: "1px solid #1AAE9E" };
const assentoDisponivelStyle = { backgroundColor: "#C3CFD9", border: "1px solid #7B8B99" };
const assentoIndisponivelStyle = { backgroundColor: "#FBE192", border: "1px solid #F7C52B" };


export default function Session() {

    const [sessao, setSessao] = useState([])
    const { idSessao } = useParams();
    const [poltrona, setPoltrona] = useState([])


    

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((response) => {
            setSessao(response.data)
        })

    }, [])

    const assentos = sessao.seats || []
   

    if (assentos.length > 0) {
        console.log(poltrona)
        return (
            <Container>
                <Title text='Selecione o(s) assento(s)' />
                <Assentos>
                    {assentos.map((assento) => 
                        <Seats key= {assento.id} assento={assento.id} poltrona={poltrona} 
                        setPoltrona={setPoltrona} disponivel={assento.isAvailable} 
                        nome={assento.name}/>

                    )}

                    <Legenda />
                </Assentos>
                <Form assentos={poltrona} sessao={sessao}></Form>

                <Footer>
                    <DataFooter>
                        <Imgbox><img src={sessao.movie.posterURL} alt="filme" /></Imgbox>
                        <div>
                            <p>{sessao.movie.title}</p>
                            <p>{sessao.day.weekday} - {sessao.day.date}</p>
                        </div>
                    </DataFooter>
                </Footer>
            </Container>

        )
    }
    return (
        null
    )

}
const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    overflow:scroll;
    
`
const Assentos = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    width:400px;
    margin:0 auto;
    
`
const Poltrona = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.design.backgroundColor};
    border: ${props => props.design.border};
    border-radius: 12px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin:10px 10px;
    cursor:pointer;

`


const Footer = styled.div`
    width: 100vw;
    height: 117px;
    left: 0px;
    bottom: 0px;
    position: fixed;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
`
const DataFooter = styled.div`
    display: flex;
    align-items: center;

div {

}

p{
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
}

`
const Imgbox = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

img {
    width: 48px;
    height: 72px;
}
`
