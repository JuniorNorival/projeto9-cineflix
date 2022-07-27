import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import Home from "../Home/Home"
import Session from "../Session/Session"
import "./reset.css"
import './style.css'
export default function App() {
    const [idSession, setIdSession]= useState ([])
    return (
        <BrowserRouter>
            <div className="header">
                <h1>CINEFLIX</h1>
            </div>
            <Routes>
                <Route path='/' element={<Home idSession={idSession}
                setIdSession={setIdSession} />} />
                <Route path='/Session' element= {<Session idSession={idSession}
                setIdSession={setIdSession} />} />
               
            </Routes>
        </BrowserRouter>

    )
}