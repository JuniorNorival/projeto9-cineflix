import { useState, useEffect } from "react"
import axios from 'axios'
export default function Session ({idSession, setIdSession}){

    const [session, setSession] = useState([])
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSession}/showtimes`)
    useEffect(() => {
        promisse.then(resposta => {
            setSession(resposta.data)       
        })
    }, [])
   
return (
 <div>
    <p>{session.title}</p>
 </div>
)
}