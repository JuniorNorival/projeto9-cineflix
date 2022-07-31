import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Form from '../Form/Form'
import Title from '../Title/Title'
import Legenda from '../Legenda/Legenda'
import Seats from "../Seats/Seats";
import Footer from "../Footer/Footer";

export default function Session() {

    const [sessao, setSessao] = useState([])
    const { idSessao } = useParams();
    const [poltrona, setPoltrona] = useState([])
    const [numPoltrona, setNumPoltrona] = useState([])
        
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((response) => {
            setSessao(response.data)

        })
        // eslint-disable-next-line
    }, [])

    const assentos = sessao.seats || []


    if (assentos.length > 0) {
        
        return (
            <>                  
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
                <Footer sessao={sessao} />
                   
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


