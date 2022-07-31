import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({ poltrona, sessao, numPoltrona }) {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const navigate = useNavigate();

    const titulo = sessao.movie.title;
    const hora = sessao.name
    const dia = sessao.day.weekday
    const data = sessao.day.date

    const resumo = ({
        name,
        cpf,
        titulo,
        hora,
        dia,
        data,
        numPoltrona

    })

    function handleForm(e) {
        e.preventDefault();
        
        if (poltrona.length > 0) {
            const ids = poltrona
            const escolhido = {
                ids,
                name,
                cpf
            }

            resetForm();
            const promisse = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',
                escolhido)

            promisse.then(() => navigate('/sucesso', { state: { resumo } }))
            promisse.catch(() => {navigate('/')
            alert('Faltou alguma coisa') })

        } else {
            alert('Escolha ao menos um assento')
        }



    }

    function resetForm() {
        setName('')
        setCpf('')

    }
    poltrona.map (()=>console.log('olha eu'))
    return (
        <Forms onSubmit={handleForm}>
            <div>
                <p>Nome do comprador:</p>
                <Input type='text' id="name" name="name" placeholder="Digite seu nome..."
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required />
                <p>CPF do comprador:</p>
                <Input type='text' id="cpf" name="cpf"
                    placeholder="Digite seu cpf..."
                    onChange={e => setCpf(e.target.value)}
                    value={cpf}
                    required />
            </div>
            <button type="submit">Reservar assento(s)</button>
        </Forms>
    )
}

const Forms = styled.form`
    display: flex;
    flex-direction:column;
    align-items:center;

p{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
}
button {
    margin:60px auto;
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    border:none;
}
button:hover {
    background-color: #da6818;
    box-shadow: 0 5px 0 #c55403;
    cursor: pointer
}

button:active{
    position:relative;
    top:5px;
    box-shadow:none;
}
`
const Input = styled.input`
    width: 327px;
    height: 51px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    margin: 10px auto;

::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #AFAFAF;


}
`