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
        // eslint-disable-next-line
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
    width:100vw;

`
const Movie = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 10px;

img {
    width: 129px;
    height: 193px;
    cursor:pointer;
}
`