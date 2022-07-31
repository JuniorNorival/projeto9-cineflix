import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
export default function Sucesso() {

const {state} = useLocation();

const resumo = state.resumo
const navigate = useNavigate();
    return (
        <Container>
            <Title>Pedido feito <br /> com sucesso!</Title>

            <BoxDados>
                <Subtitulo text="Filme e Sessão" />
                <Dados>
                    <p>{resumo.titulo}</p>
                    <p>{resumo.data} - {resumo.hora}</p>
                </Dados>
            </BoxDados>
            <BoxDados>
                <Subtitulo text="Ingressos" />
                <Dados>
                    {resumo.numPoltrona.map((num, index) =>
                        <p key={index}>Assento {num}</p>)}
                </Dados>
            </BoxDados>
            <BoxDados>
                <Subtitulo text="Comprador" />
                <Dados>
                    <p>Nome: {resumo.name}</p>
                    <p>CPF: {resumo.cpf}</p>
                </Dados>
            </BoxDados>
            <Botao onClick={()=>navigate('/')}>Voltar para Home</Botao>
        </Container>

    )

}

function Subtitulo({ text }) {
    return (
        <Sub>{text}</Sub>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:300px;
margin: 0 auto;
`
const Title = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: 0.04em;
color: #247A6B;
height: 110px;
margin-top:100px;
`

const Sub = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
margin-bottom: 10px;

`
const BoxDados = styled.div`

width: 100%;
margin: 20px auto;
`
const Dados = styled.div`
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;

`

const Botao = styled.button `
margin:15px auto;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
`