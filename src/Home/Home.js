import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import Title from "../Title/Title";
import styled from "styled-components";

export default function Home() {

    const [movies, setMovies] = useState([])

    const promisse = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
    
    useEffect(() => {
        promisse.then(resposta => {
            setMovies(resposta.data)

        })
    }, [])


    return (
        <>
            <Title text='Selecione o Filme' />
            <Movies>
                {movies.map((movie) =>
                    <Link to={`/sessoes/${movie.id}`} key={movie.id} >
                        <Movie>
                            <img src={movie.posterURL} alt="filme" />
                        </Movie>
                    </Link>
                )}
            </Movies>

        </>
    )
}

const Movies = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
const Movie = styled.div`

img {
    width: 129px;
    height: 193px;
    margin: 45px 25px;
    cursor:pointer;
}
`