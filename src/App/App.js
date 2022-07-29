import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home"
import Movie from "../Movie/Movie";
import Session from "../Session/Session";
import "./reset.css"
import './style.css'

export default function App() {
    
    
    return (
        <BrowserRouter>
            <div className="header">
                <h1>CINEFLIX</h1>
            </div>
            <Routes>
                <Route path='/' element={<Home  />} />
                <Route path='/sessoes/:idmovie' element= {<Movie />} />
               <Route path='/sessao/:idsession' element= {<Session />} />
            </Routes>
        </BrowserRouter>

    )
}