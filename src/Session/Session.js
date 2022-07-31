import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from '../Form/Form'
import Title from '../Title/Title'
import Legenda from '../Legenda/Legenda'
import Seats from "../Seats/Seats";

export default function Session() {

    const [sessao, setSessao] = useState([])
    const { idSessao } = useParams();
    const [poltrona, setPoltrona] = useState([])
    const [numPoltrona, setNumPoltrona] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((response) => {
            setSessao(response.data)

        })

    }, [])

    const assentos = sessao.seats || []


    if (assentos.length > 0) {
        console.log(numPoltrona)
        return (
            <>
              <button className="voltar"
                onClick={()=>navigate(-1)}>Voltar</button>
                <Container>
                    <Title text='Selecione o(s) assento(s)' />
                    <Assentos>
                        {assentos.map((assento) =>
                            <Seats key={assento.id} assento={assento.id} poltrona={poltrona}
                                setPoltrona={setPoltrona} disponivel={assento.isAvailable}
                                nome={assento.name} numPoltrona={numPoltrona}
                                setNumPoltrona={setNumPoltrona} />

                        )}
                        <Legenda />
                    </Assentos>
                    <Form poltrona={poltrona} sessao={sessao} numPoltrona={numPoltrona} />

                </Container>
                <Footer>
                    <DataFooter>
                        <Imgbox><img src={sessao.movie.posterURL} alt="filme" /></Imgbox>
                        <div>
                            <p>{sessao.movie.title}</p>
                            <p>{sessao.day.weekday} - {sessao.day.date}</p>
                        </div>
                    </DataFooter>
                </Footer>
            </>
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
    margin-bottom: 130px;
    overflow:scroll;
    
`
const Assentos = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    width:375px;
    margin:0 auto;
    
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
    z-index: 1;
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
