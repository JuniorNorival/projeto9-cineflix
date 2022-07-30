import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import './style.css'
import Title from "../Title/Title";

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
            <div className="movies">
                {movies.map((movie) =>
                    <Link to={`/sessoes/${movie.id}`} key={movie.id} >
                        <div className="movie" >
                            <img className="poster" src={movie.posterURL} alt="filme" />
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}