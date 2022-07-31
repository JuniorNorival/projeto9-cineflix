import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import styled from "styled-components"
import Title from "../Title/Title"
import Footer from "../Footer/Footer"

export default function Movie() {

    const [movie, setmovie] = useState([])
    const { idFilme } = useParams();

    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)

    useEffect(() => {
        promisse.then(resposta => {
            setmovie(resposta.data)

        })
        // eslint-disable-next-line
    }, [])

    const sessions = movie.days || []

    if (sessions.length > 0) {

        return (
            <>
                <Title text='Selecione o horário' />
                <Horarios>
                    {sessions.map((session) => {
                        const times = session.showtimes
                        return (
                            <Sessoes key={session.id}>
                                <p>{session.weekday} - {session.date}</p>
                                {times.map((hour) =>
                                    <Link key={hour.id} to={`/assentos/${hour.id}`}>
                                        <Botao>{hour.name}</Botao>
                                    </Link>
                                )}
                            </Sessoes>
                        )
                    }
                    )}
                </Horarios>
                <Footer movie={movie} />
            </>
        )
    } else {
        return (
            <p>Carregando...</p>
        )
    }

}

const Horarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 130px;
`
const Sessoes = styled.div`
    margin: 0 auto;
    width: 300px;


p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
}

`
const Botao = styled.button`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    margin: 10px 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    border: none;


    :hover {
        background-color: #da6818;
        box-shadow: 0 5px 0 #c55403;
        cursor: pointer
    }

    :active{
        position:relative;
        top:5px;
        box-shadow:none;
    }

`

