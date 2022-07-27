import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
import './style.css'

export default function Home({
    idSession,
    setIdSession}) {
    const [movies, setMovies] = useState([])

    const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    useEffect(() => {
        promisse.then(resposta => {
            setMovies(resposta.data)
            
        })
    }, [])
    

    return (
        <div className="movies">
            {movies.map((movie) =>
                <Link to='/session' key={movie.id} >
                    <div className="movie" >
                        <img className="poster" src={movie.posterURL} onClick={()=> {
                            setIdSession(movie.id)
                            console.log(idSession)
                        }} />
                    </div>
                </Link>
            )}
        </div>
    )
}