import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import './style.css'
import styled from "styled-components"

export default function Movie() {

    const [movie, setmovie] = useState([])

    const { idmovie } = useParams();


    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idmovie}/showtimes`)

    useEffect(() => {
        promisse.then(resposta => {
            setmovie(resposta.data)

        })
    }, [])

    const sessions = movie.days || []

    if (sessions.length > 0) {
        console.log(sessions)

        return (
            <>
                <div className="title">
                    <p>Selecione o horário</p>
                </div>
                <div className="horarios">
                    {sessions.map((session) => {
                        const times = session.showtimes
                        return (
                            <div className="sessoes" key = {session.id}>
                                <p>{session.weekday} - {session.date}</p>
                                {times.map((hour) =>
                                <Link to ={`/sessao`}>
                                 <button>{hour.name}</button>
                                </Link>
                                   )}
                            </div>
                        )
                    }
                    )}
                </div>

                <Footer>
                    <DataFooter>
                        <Imgbox><img src={movie.posterURL} /></Imgbox>
                        <p>{movie.title}</p>
                    </DataFooter>
                </Footer>
            </>
        )
    } else {
        return (
            <p>carregando...</p>
        )
    }

}

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