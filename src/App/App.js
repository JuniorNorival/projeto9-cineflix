import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../Home/Home"
import Movie from "../Movie/Movie";
import Session from "../Session/Session";
import Sucesso from '../Sucesso/Sucesso'
import "./reset.css"
import './style.css'

export default function App() {

    const [resumo, setResumo] = useState({})
    return (
        <BrowserRouter>
            <div className="header">
                <h1>CINEFLIX</h1>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sessoes/:idFilme' element={<Movie />} />
                <Route path='/assentos/:idSessao' element={<Session resumo={resumo}
                    setResumo={setResumo} />} />
                <Route path='/sucesso' element={<Sucesso resumo={resumo} />} />
            </Routes>
        </BrowserRouter>

    )
}